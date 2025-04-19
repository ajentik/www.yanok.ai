import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Harness"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/harness.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Harness Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(26, 145, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Harness is a fundraising platform for nonprofits with a focus on recurring donations. Build a subscription program to better acquire, gratify and upgrade recurring donors.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Donation Failed</div>
  <div>Triggers when a donation of any kind (one-time, monthly, round-up) fails, usually due to card errors.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Monthly Donation Cancelled</div>
  <div>Triggers when a donor cancels a monthly donation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Donation</div>
  <div>Triggers when a new donation of the selected type is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Donor</div>
  <div>Triggers when a donor registers a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Monthly Donation Created</div>
  <div>Triggers when a donor creates a new monthly donation subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Round-Up Account Created</div>
  <div>Triggers when a donor connects a new round-up account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Round-Up Account Cancelled</div>
  <div>Triggers when a donor cancelled their round-up account.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Harness</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
