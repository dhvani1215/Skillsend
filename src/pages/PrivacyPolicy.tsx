
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-50/20 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex flex-col items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center mb-4">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                This Privacy Policy describes how SkillShare ("we", "our", or "us") collects, uses, and discloses your personal information when you visit our website, use our services, or otherwise interact with us. We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect various types of information from and about users of our platform, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Personal Information:</span> Name, email address, phone number, profile picture, and other information you provide when creating an account or updating your profile.
                </li>
                <li>
                  <span className="font-medium text-foreground">Usage Information:</span> Information about how you use our services, including your browsing history, interactions with other users, skills you search for, and your engagement with platform features.
                </li>
                <li>
                  <span className="font-medium text-foreground">Device Information:</span> Information about the device you use to access our platform, including IP address, browser type, operating system, and device identifiers.
                </li>
                <li>
                  <span className="font-medium text-foreground">Location Information:</span> General location information based on your IP address or more precise location information if you enable location services.
                </li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Providing and improving our services</li>
                <li>Matching users based on skills and interests</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with you about our services, updates, and promotions</li>
                <li>Ensuring the security and integrity of our platform</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Other users of our platform as part of the intended functionality</li>
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with your consent</li>
                <li>Law enforcement or regulatory authorities when required by law</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not sell your personal information to third parties.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies and Similar Technologies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your experience on our platform, collect information about how you interact with our services, and facilitate certain platform functions. For more information about our use of cookies, please see our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee absolute security.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Restricting or objecting to our processing of your personal information</li>
                <li>Requesting a copy of your personal information</li>
                <li>Withdrawing consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at privacy@skillshare.com.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our website or by other means as required by applicable law.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at privacy@skillshare.com or through our <a href="/contact" className="text-primary hover:underline">Contact</a> page.
              </p>
            </div>
            
            <div className="pt-8">
              <p className="text-muted-foreground text-sm text-center">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
