import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { HeartHandshake } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Attempting to save email:", email);
      
      // First check if email already exists using maybeSingle()
      const { data: existingSubscriber } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .maybeSingle();

      if (existingSubscriber) {
        console.log("Email already exists:", email);
        toast({
          title: "Already subscribed",
          description: "This email is already registered for updates.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // If email doesn't exist, proceed with insertion
      const { error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (insertError) {
        console.error("Error inserting email:", insertError);
        throw insertError;
      }

      // If successful, try to send welcome email
      try {
        const welcomeEmailResponse = await supabase.functions.invoke('send-welcome-email', {
          body: { email }
        });

        if (!welcomeEmailResponse.error) {
          toast({
            title: "Thanks for signing up!",
            description: "We've sent you a confirmation email.",
          });
          setEmail("");
        } else {
          console.error('Welcome email error:', welcomeEmailResponse.error);
          throw new Error('Failed to send welcome email');
        }
      } catch (emailError) {
        console.error('Welcome email error:', emailError);
        toast({
          title: "Signed up successfully",
          description: "You're subscribed, but we couldn't send the welcome email. You'll still receive our updates!",
        });
      }
    } catch (error) {
      console.error('Error in email signup:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="py-16 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <HeartHandshake className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Join Our Gratitude Community
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Be part of a community that celebrates daily moments of appreciation.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="sm:flex">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isLoading}
              className="w-full px-5 py-3 text-base text-foreground placeholder-muted-foreground border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            />
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Now"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;