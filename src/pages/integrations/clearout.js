import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Clearout"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clearout.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Clearout Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(250, 181, 103, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Clearout is an email validation and verification service that helps you eliminate bounces, prevent fraudulent signups, and protect your brand\'s reputation.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Verify Email Address</div>
  <div>Verify an email address to know its status (Valid or Invalid or Catch-All or Disposable or Free Account, Spamtrap or Toxic)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Domain Expiry</div>
  <div>Convenience API to return the domain\'s expiry date time. Useful to monitor and alert the domain owner</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Domain MX</div>
  <div>Convenience API to find and return the MX records for a domain in higher priority order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Domain Whois Record</div>
  <div>Convenience API to find and return the Whois record for the domain in JSON format</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify Email Address for Business Email</div>
  <div>Verify email address belongs to Business or Work or Professional. Most business sites/applications require to capture only the business email addresses. However, in certain contexts, businesses can receive better open/response rates when only sending to non-free email addresses</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify Email Address for CatchAll</div>
  <div>Verify an email address for Catch-All. A \'Catch-All\' email account is the account that captures emails sent to any invalid email addresses of the domain and never bounces it back to the sender.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify Email Address for Disposable</div>
  <div>Verify email address for Disposable. Generally, a disposable email address is a temporary mailbox that can only receive an email, self-destructed after a certain time elapses. It is also known by names like throwaway email, fake-mail or trash-mail, such type of email addresses are used for account activation, thus by not revealing personal email address to the service provider, so it is highly recommended not to send emails to disposable addresses</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify Email Address for Role</div>
  <div>Verify email address for role account, typically these addresses are associated with a role or group (postmaster, support, sales, etc.) account instead of a person. In some instances, mailing to a role address can lead to a decreased open rate and is generally advised against while sending an email</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Clearout</title>
          <meta name="description" content={}/>s reputation.' />
        </>
      ),
    },
  };
}
