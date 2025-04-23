import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Phone Validator Fake Number Check"
      description={`Phone Validator Fake Number Check quickly detects fake phone numbers like 555-555-5555 and 123-456-7890. There is a 100% certainty that a number we have identified as fake cannot receive a call or text.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/phonevalidator-fake-number-check.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Phone Validator Fake Number Check Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 123, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Phone Validator Fake Number Check quickly detects fake phone numbers like 555-555-5555 and 123-456-7890. There is a 100% certainty that a number we have identified as fake cannot receive a call or text.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Fake Number Check</div>
  <div>Determine if fake phone number of any North American phone number.</div>
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
          <title>Phone Validator Fake Number Check</title>
          <meta name="description" content={`Phone Validator Fake Number Check quickly detects fake phone numbers like 555-555-5555 and 123-456-7890. There is a 100% certainty that a number we have identified as fake cannot receive a call or text.`} />
        </>
      ),
    },
  };
}
