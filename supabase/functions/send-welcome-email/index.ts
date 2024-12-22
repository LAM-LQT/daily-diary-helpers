import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    
    // Generate unsubscribe token (simple hash of email + timestamp)
    const unsubscribeToken = btoa(`${email}-${Date.now()}`);
    
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Thanks Everyday <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to Thanks Everyday!",
        html: `
          <div style="background-color: #f8f9ff; padding: 20px; font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h1 style="color: #6366f1; margin-bottom: 20px;">Welcome to Thanks Everyday!</h1>
              <p style="color: #4b5563; line-height: 1.6;">Thank you for subscribing to our newsletter! We're excited to share updates and insights with you.</p>
              <p style="color: #4b5563; line-height: 1.6;">You'll receive our latest updates and news directly to your inbox.</p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 0.875rem;">
                  If you wish to unsubscribe, <a href="https://your-app-url/unsubscribe?token=${unsubscribeToken}" style="color: #6366f1; text-decoration: underline;">click here</a>
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to send email: ${await res.text()}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);