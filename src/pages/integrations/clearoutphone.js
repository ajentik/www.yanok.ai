import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="ClearoutPhone"
      description={`ClearoutPhone is a global phone validator covering 240+ countries with carrier and line type lookup.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/clearoutphone.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        ClearoutPhone Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(98, 0, 234, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">ClearoutPhone is a global phone validator covering 240+ countries with carrier and line type lookup.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find Phone Number Carrier</div>
  <div>Find the given phone number carrier (operator), the response object will have the operator name if found else return \'Unknown\' in case of invalid phone number or unable to find the operator</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Phone Number Is Mobile</div>
  <div>Find the given phone number is of mobile, it will return "Yes" if the number is mobile or "No" other than mobile. It can return \'Maybe\' in case if the number of type mobile-or-fixed-line</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Validate Phone Number</div>
  <div>Validate given phone number to know its validity, line type, network carrier, location. Knowing the line-type help to decide whether the message can be sent through SMS or Call, with location leads can be routed to the right sales region, etc.,</div>
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
          <title>ClearoutPhone</title>
          <meta name="description" content={`ClearoutPhone is a global phone validator covering 240+ countries with carrier and line type lookup.`} />
        </>
      ),
    },
  };
}
