import nodemailer from 'nodemailer'
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport'
import { IMailProvider, IMessage } from './../IMailProvider'

export class MailTrapMailProvider implements IMailProvider {
  private transporter: nodemailer.Transporter<SentMessageInfo>

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '1575c91f8db43e',
        pass: '92162cf74ea915'
      }
    })
  }
  async sendMail (message: IMessage): Promise<void> {
    this.transporter.sendMail({
      to: message.to.email,
      from: message.from.email,
      subject: message.subject,
      text:message.body,
      html: message.body,
    })
  }
}
