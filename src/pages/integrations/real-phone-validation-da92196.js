import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Real Phone Validation"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/real-phone-validation-da92196.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Real Phone Validation Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(26, 26, 26, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">RealPhoneValidation provides the data behind the number. Connected or disconnected, landline or cell, carrier ID, do not call, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Do Not Call Lookup</div>
  <div>Find out if a US phone number is on the National, State, DMA Do Not Call lists. It also tells you if a phone number is tied to DNC violation litigation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Do Not Call Plus</div>
  <div>Validates any US phone number to see if it is connected or disconnected, with a small percentage of unknowns. As well as finds out if a US phone number is on the National, State, and DMA Do Not Call lists. It also tells you if a phone number is tied to DNC violation litigation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Scrub Phone Number Validator</div>
  <div>Validates any US phone number to see if it is connected or disconnected, with a small percentage of unknowns.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Scrub Plus Phone Validator</div>
  <div>Validates any US phone number to see if it is connected or disconnected, with a small percentage of unknowns. Also identifies the phone type (cell, landline, or VoIP)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Turbo Phone Validator (Deprecated)</div>
  <div>Validates any US phone number to see if it is connected or disconnected. Also identifies the carrier and phone type (cell, landline, or VoIP)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Turbo V3 Phone Validator</div>
  <div>Validates any US phone number to see if it is connected or disconnected. Also identifies the subscriber name, subscriber type (consumer or business), carrier, and phone type (cell, landline, or VoIP)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Turbo Standard Phone Validator</div>
  <div>Validates any US phone number to see if it is connected or disconnected. Also identifies the phone type (cell, landline, or VoIP)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Wireless ID</div>
  <div>Phone type identifier check whether a number is a landline or cell phone for TCPA compliance.</div>
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
          <title>Real Phone Validation</title>
        </>
      ),
    },
  };
}
