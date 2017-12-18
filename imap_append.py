"""
A very messy IMAP append example

An ideal use case would be for parsing a contact form and
rather than emailing it to yourself, just simply connecting
to your mailbox using IMAP and place it in your INBOX
"""

import email.message
import imaplib
import time

mail = imaplib.IMAP4_SSL('imap.fastmail.com')
mail.login('user@example.com', 'password')
boxes = [box.split()[-1].decode('utf-8', 'strict') for box in mail.list()[1:][0]]
mailbox = input('Please select a box ({}): '.format(', '.join(boxes)))
print('Selecting {}'.format(mailbox))
mail.select(mailbox)

msg = email.message.Message()
msg.set_unixfrom('marcus')
msg['Subject'] = 'Python test'
msg['From'] = 'pastyou@example.com'
msg['To'] = 'futureyou@example.com'
msg.set_payload('This is a message!')

mail.append(mailbox, '', imaplib.Time2Internaldate(time.time()), str(msg).encode('utf-8'))
