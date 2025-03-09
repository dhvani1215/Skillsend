
// This is a mock email service

export const sendEmail = async (recipientEmail: string, subject: string, body: string) => {
  // In a real application, you would use a proper email service like Nodemailer, SendGrid, etc.
  console.log(`Sending email to: ${recipientEmail}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);
  
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return success response
  return {
    success: true,
    message: 'Email sent successfully!'
  };
};

export const subscribeToNewsletter = async (userEmail: string) => {
  // Admin email hardcoded - in a real app this would come from environment variables
  const adminEmail = 'dhvnai3@gmail.com';
  
  // In a real app, you would save the email to a database and then send the notification
  await sendEmail(
    adminEmail, 
    'New Newsletter Subscription', 
    `A new user has subscribed to the newsletter: ${userEmail}`
  );
  
  // Return success response
  return {
    success: true,
    message: 'Subscription successful!'
  };
};
