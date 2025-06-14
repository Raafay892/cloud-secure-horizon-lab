import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Calendar as CalendarIcon, ChevronRight } from "lucide-react";

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "Cloud Security Workshop",
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Event",
    description: "Join us for a hands-on workshop exploring the latest techniques in cloud security. This workshop will cover secure cloud configuration, threat detection, and incident response.",
    registrationLink: "#",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    tags: ["Workshop", "Hands-on"]
  },
  {
    id: 2,
    title: "Privacy in the Cloud Era - Symposium",
    date: "June 8-10, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "University Conference Center",
    description: "A three-day symposium bringing together researchers, practitioners, and policymakers to discuss the future of privacy in cloud computing environments.",
    registrationLink: "#",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    tags: ["Symposium", "In-person"]
  },
  {
    id: 3,
    title: "Webinar: Zero Trust Architecture for Cloud Services",
    date: "July 22, 2025",
    time: "2:00 PM - 3:30 PM",
    location: "Online",
    description: "Learn about implementing zero trust principles in cloud services to enhance security posture and reduce attack surface. This webinar will feature experts from academia and industry.",
    registrationLink: "#",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&w=900&q=80",
    tags: ["Webinar", "Free"]
  },
];

const pastEvents = [
  {
    id: 4,
    title: "Secure Multi-Party Computation Workshop",
    date: "November 12, 2024",
    location: "Virtual Event",
    description: "A workshop focused on practical applications of secure multi-party computation in cloud environments.",
    recordingLink: "#",
    slidesLink: "#",
  },
  {
    id: 5,
    title: "Annual Cloud Security Conference",
    date: "September 5-7, 2024",
    location: "University Conference Center",
    description: "Our annual conference bringing together leading researchers and practitioners in cloud security and privacy.",
    recordingLink: "#",
    slidesLink: "#",
  },
  {
    id: 6,
    title: "Privacy-Preserving Analytics Seminar",
    date: "July 15, 2024",
    location: "Research Building, Room 305",
    description: "A seminar presenting new techniques for privacy-preserving analytics in cloud environments.",
    recordingLink: "#",
    slidesLink: "#",
  },
  {
    id: 7,
    title: "Industry Roundtable: Cloud Security Challenges",
    date: "May 23, 2024",
    location: "Virtual Event",
    description: "A roundtable discussion with industry leaders on emerging cloud security challenges and solutions.",
    recordingLink: "#",
    slidesLink: "#",
  },
];

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "CSP Lab Receives $2M Grant for Cloud Privacy Research",
    date: "April 10, 2025",
    summary: "The Cloud Security and Privacy Lab has been awarded a $2 million grant from the National Science Foundation to research advanced privacy-preserving techniques for cloud computing environments.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "New Research Partnership with Leading Cloud Provider",
    date: "March 25, 2025",
    summary: "CSP Lab announces a new research partnership with a leading cloud provider to develop and evaluate next-generation cloud security technologies.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=900&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Dr. Jane Smith Named Fellow of Cybersecurity Association",
    date: "February 14, 2025",
    summary: "CSP Lab Director Dr. Jane Smith has been named a Fellow of the International Association for Cybersecurity Research in recognition of her contributions to cloud security.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "New Publication on Homomorphic Encryption in Top Conference",
    date: "January 30, 2025",
    summary: "Researchers from CSP Lab have published a groundbreaking paper on practical homomorphic encryption for cloud applications in the IEEE Symposium on Security and Privacy.",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=900&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "CSP Lab Hosts Workshop on Cloud Privacy Compliance",
    date: "December 12, 2024",
    summary: "The lab recently hosted a successful workshop on cloud privacy compliance, bringing together researchers, practitioners, and regulators to discuss emerging challenges.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=900&q=80",
    link: "#"
  },
];

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("events");

  return (
    <div>
      <PageHeader
        title="Events & News"
        subtitle="Stay updated with our latest events, workshops, and news"
      />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>
            
            <TabsContent value="events">
              {/* Upcoming Events */}
              <SectionHeader
                title="Upcoming Events"
                subtitle="Join us at these upcoming workshops, conferences, and webinars"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {event.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <a href={event.registrationLink}>Register Now</a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {/* Past Events */}
              <SectionHeader
                title="Past Events"
                subtitle="Explore our previous events and access recordings"
                className="mt-16"
              />
              
              <div className="mt-8 space-y-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-sm transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <Button size="sm" variant="outline" asChild>
                          <a href={event.recordingLink}>Watch Recording</a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={event.slidesLink}>Download Slides</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Calendar Integration */}
              <div className="mt-16 bg-feminine-background-alt rounded-lg p-8 text-center">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-feminine-primary" />
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Events Calendar</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Never miss an event! Subscribe to our events calendar to stay updated with all our upcoming workshops, webinars, and conferences.
                </p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-feminine-primary hover:bg-feminine-primary-dark">
                    Google Calendar
                  </Button>
                  <Button>
                    iCal / Outlook
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="news">
              <SectionHeader
                title="Latest News"
                subtitle="Stay updated with the latest news and announcements from CSP Lab"
              />
              
              <div className="mt-8 space-y-8">
                {newsItems.map((news, index) => (
                  <Card key={news.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-64 md:h-auto">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 flex flex-col">
                        <CardHeader>
                          <div className="text-sm text-muted-foreground mb-1">
                            {news.date}
                          </div>
                          <CardTitle className="text-xl">{news.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{news.summary}</p>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                          <Button variant="outline" asChild>
                            <a href={news.link}>
                              Read Full Story <ChevronRight className="ml-1 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-16 bg-gradient-to-r from-feminine-primary to-feminine-primary-dark text-feminine-text-light rounded-lg p-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="mb-6 text-feminine-text-light/80">
                    Get the latest news, research updates, and event announcements delivered directly to your inbox.
                  </p>
                  <form className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="px-4 py-3 rounded-md flex-grow text-foreground"
                        required
                      />
                      <Button className="bg-feminine-secondary hover:bg-feminine-secondary-dark whitespace-nowrap">
                        Subscribe Now
                      </Button>
                    </div>
                    <p className="text-sm text-feminine-text-light/60">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-16">
                <SectionHeader
                  title="Follow Us"
                  subtitle="Stay connected with us on social media for the latest updates"
                  align="center"
                />
                
                <div className="flex justify-center gap-8 mt-8">
                  <Button size="lg" variant="outline" className="rounded-full w-12 h-12 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full w-12 h-12 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full w-12 h-12 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full w-12 h-12 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
