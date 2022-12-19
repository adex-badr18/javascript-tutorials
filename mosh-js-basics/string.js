// =====================STRING========================
console.log('=====================STRING========================');
const oneMessage = new String(' This is a string object declaration. ');
const message = 'This is my first message.';

console.log('Typeof oneMessage:', typeof oneMessage);
console.log('Typeof message:', typeof message);
console.log('Length of message:', message.length);
console.log('First character of message using []:', message[0]);
console.log('First character of message using charAt():', message.charAt(0));
console.log('Does message contains \'my\'?:', message.includes('my'));
console.log('Does message starts with \'This\'?:', message.startsWith('This'));
console.log('Does message ends with \'e\'?:', message.endsWith('This'));
console.log('What is the starting index of \'my\'?:', message.indexOf('my'));
console.log('Replace \'first\' with \'second\' in message, creates a new string:', message.replace('first', 'second'));
console.log('Changes message to upper case, creates a new string:', message.toUpperCase());
console.log('Trim the white spaces at the start and end of oneMessage:', oneMessage.trim());
console.log('Trim the white spaces at the start of oneMessage:', oneMessage.trimStart());
console.log('Trim the white spaces at the end of oneMessage:', oneMessage.trimEnd());
console.log('Split message into words, returns and array of words:', message.split(' '));

// =====================TEMPLATE LITERALS========================
console.log('=====================TEMPLATE LITERALS========================');
const mailMessage = `Hi ${musa.fullName()},

Thank you for joining my mailing list.

Regards,
Badru`;
console.log("The mail message is shown below:")
console.log(mailMessage);