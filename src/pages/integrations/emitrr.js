import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Emitrr"
      description={`Emitrr is a human-like smart receptionist for small businesses. With Emitrr, business owners don’t have to worry about missing customer calls and can focus on their business growth, while Emitrr handles customer queries like booking appointments, quotes, FAQs, and more.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/emitrr.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Emitrr Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(250, 211, 80, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Emitrr is a human-like smart receptionist for small businesses. With Emitrr, business owners don’t have to worry about missing customer calls and can focus on their business growth, while Emitrr handles customer queries like booking appointments, quotes, FAQs, and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create New Contact</div>
  <div>Creates new contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Review Campaign</div>
  <div>Sends a message containing review link to end user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>send text message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Quote Followup</div>
  <div>Encourages booking by sending messages with quotation to an end user upon request received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Stop Quote Followup</div>
  <div>stops quote followup</div>
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
          <title>Emitrr</title>
          <meta name="description" content={`Emitrr is a human-like smart receptionist for small businesses. With Emitrr, business owners don’t have to worry about missing customer calls and can focus on their business growth, while Emitrr handles customer queries like booking appointments, quotes, FAQs, and more.`} />
        </>
      ),
    },
  };
}
