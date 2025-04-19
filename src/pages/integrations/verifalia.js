import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Verifalia"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/verifalia.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Verifalia Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(113, 147, 45, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Verifalia is a fast and accurate email verification service which identifies deliverable, invalid, or otherwise risky email addresses in real-time: it stops bad and low-quality emails getting into your systems, reduces bounce rates and keeps your campaigns deliverable.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Email Verification Job</div>
  <div>Deletes a previously submitted email verification job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify Email Address</div>
  <div>Verifies a single email address and checks if it is properly formatted, really exists and can accept mails, if it is a free or a business mail, flagging spam traps, role accounts, disposable and catch-all addresses - and much more.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Verify List of Email Addresses</div>
  <div>Verifies a list of email addresses and checks if they are properly formatted, really exist and can accept mails, if they are free or business mails, flagging spam traps, role accounts, disposable and catch-all addresses, marking duplicates - and much more; returns the verified list as either a CSV or an Excel file.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Credit Balance</div>
  <div>Gets the number of available credit packs and free daily credits in the account.</div>
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
          <title>Verifalia</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
