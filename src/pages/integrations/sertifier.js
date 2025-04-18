import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Sertifier"
      description="Sertifier is a full-stack solution that enables its users to design, send and store smart certificates using blockchain."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sertifier.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Sertifier Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(40, 163, 128, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Sertifier is a full-stack solution that enables its users to design, send and store smart certificates using blockchain.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Attributes</div>
  <div>Triggers when a new Attribute is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Badge Design</div>
  <div>Triggers when a new badge design is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Delivery</div>
  <div>Triggers when a new Delivery is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Certificate Design</div>
  <div>Triggers when a new certificate design is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Detail</div>
  <div>Triggers when new Detail is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Template</div>
  <div>Triggers when new email template is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Skills</div>
  <div>Triggers when new skill is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Handle Detail & Delivery Dynamically</div>
  <div>This actions checks if any Detail was created with the given data. If there is a Detail already created with the same data, the Delivery of this Detail is returned to use in the next action. If there is none, a corresponding Detail and Delivery is created with the given data and the Id of the new Delivery is returned to use in the next action. This action is used when Details need to be created dynamically but the Recipients for this Detail will be sent one by one. Without this action, a new Detail and Delivery would have to be created every time a credential is issued.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Delivery</div>
  <div>Create the Delivery to issue your credentials to your recipients.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Detail</div>
  <div>Create the Detail of the credential, will be used in the Delivery.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add & Publish Single Recipient</div>
  <div>Adds, and if wanted publishes, a single Recipient to a Delivery.</div>
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
          <title>Sertifier</title>
          <meta name="description" content="Sertifier is a full-stack solution that enables its users to design, send and store smart certificates using blockchain." />
        </>
      ),
    },
  };
}
