import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, Building, Users } from "lucide-react";

// Sample team member contacts
const contactPeople = [
  {
    name: "Dr. Shahzaib Tahir",
    role: "Principal Investigator",
    email: "shahzaib.tahir@csplab.org",
    phone: "+1 (555) 111-1111",
    image: "/lovable-uploads/a0df76a8-82c9-4076-bda9-809eacd9607a.png",
    topics: ["General Inquiries", "Cloud Security Research"]
  },
  {
    name: "Dr. Hassan Tahir",
    role: "Co-Principal Investigator",
    email: "hassan.tahir@csplab.org",
    phone: "+1 (555) 222-2222",
    image: "/lovable-uploads/3a4b7d7d-c183-4213-aace-95d1d1311827.png",
    topics: ["Blockchain & Privacy Systems"]
  },
  {
    name: "Aiman Sultan",
    role: "Research Assistant",
    email: "aiman.sultan@csplab.org",
    phone: "+1 (555) 333-3333",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&auto=format&fit=crop&q=80",
    topics: ["Research Projects"]
  },
  {
    name: "Tayyaba Anwar",
    role: "Research Assistant",
    email: "tayyaba.anwar@csplab.org",
    phone: "+1 (555) 444-4444",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop&q=80",
    topics: ["Research Projects"]
  },
  {
    name: "Syed Bilal Abbas",
    role: "Research Associate",
    email: "bilal.abbas@csplab.org",
    phone: "+1 (555) 555-5555",
    image: "/lovable-uploads/676c82b5-d859-4caa-9c98-700326e3c338.png",
    topics: ["Security Implementation"]
  },
  {
    name: "Muhammad Raafay Nouman",
    role: "Research Associate",
    email: "raafay.nouman@csplab.org",
    phone: "+1 (555) 666-6666",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop&q=80",
    topics: ["Privacy Technology"]
  },
  {
    name: "Aimen Farooq",
    role: "Research Associate",
    email: "aimen.farooq@csplab.org",
    phone: "+1 (555) 777-7777",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop&q=80",
    topics: ["Cloud Security"]
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactPerson: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We will get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      contactPerson: "",
    });
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, collaborations, or general information"
      />

      {/* Contact Information */}
      <section className="py-12 bg-feminine-background-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-feminine-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-muted-foreground">
                        Cloud Security and Privacy Lab<br />
                        Military College of Signals<br />
                        Khadim Hussain Road, Lalkurti
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-feminine-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:contact@csplab.org" className="hover:text-feminine-primary transition-colors">
                          contact@csplab.org
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-feminine-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+15551234567" className="hover:text-feminine-primary transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-feminine-primary mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <iframe
                  title="Lab Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1034026894494!2d-122.16987288451661!3d37.772698979758846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f91a7d2c119f7%3A0xa71a98b9d9c5b611!2sUniversity%20of%20California%20Berkeley!5e0!3m2!1sen!2sus!4v1619791792888!5m2!1sen!2sus"
                  className="w-full h-full min-h-[300px] rounded-lg shadow-sm"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch with Our Team Members</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactPeople.map((person, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-3">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-12 h-12 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{person.name}</CardTitle>
                      <CardDescription>{person.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                      <a href={`mailto:${person.email}`} className="text-feminine-primary hover:underline">
                        {person.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                      <a href={`tel:${person.phone.replace(/\D/g, '')}`} className="text-feminine-primary hover:underline">
                        {person.phone}
                      </a>
                    </div>
                    <div className="flex items-start text-sm">
                      <Users className="h-4 w-4 text-muted-foreground mr-2 mt-1" />
                      <div>
                        <span className="text-muted-foreground">Topics:</span>
                        <ul className="list-disc list-inside ml-1">
                          {person.topics.map((topic, idx) => (
                            <li key={idx} className="text-muted-foreground">{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gradient-to-r from-feminine-primary to-feminine-primary-dark text-feminine-text-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-feminine-text-light/80">
                Have a question or want to collaborate? Fill out the form below and we'll get back to you.
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is your message about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Who would you like to contact? (Optional)</Label>
                    <select
                      id="contactPerson"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.contactPerson}
                      onChange={handleChange}
                    >
                      <option value="">General Inquiry</option>
                      {contactPeople.map((person, index) => (
                        <option key={index} value={person.name}>
                          {person.name} - {person.role}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry or message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-end">
                    <Button type="submit" size="lg" className="bg-feminine-secondary hover:bg-feminine-secondary-dark">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lab Visits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Building className="h-12 w-12 mx-auto mb-4 text-feminine-primary" />
              <h2 className="text-2xl font-bold mb-2">Lab Visits</h2>
              <p className="text-muted-foreground">
                Interested in visiting our lab facilities? We welcome visitors from academia, industry, and government.
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p>
                    The CSP Lab regularly hosts visitors for tours, demonstrations, and research discussions. 
                    To schedule a visit, please contact us at least two weeks in advance with the following information:
                  </p>
                  
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Names and affiliations of all visitors</li>
                    <li>Preferred dates and times</li>
                    <li>Purpose of the visit</li>
                    <li>Specific research areas or technologies of interest</li>
                  </ul>
                  
                  <p className="font-medium mt-4">
                    Please note that some research areas and facilities may have restricted access due to security and confidentiality requirements.
                  </p>
                  
                  <div className="flex justify-center mt-4">
                    <Button asChild>
                      <a href="mailto:visits@csplab.org">Request a Visit</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
