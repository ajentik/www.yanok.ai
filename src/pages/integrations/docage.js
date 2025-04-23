import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Docage"
      description={`Docage is an electronic signature platform and fully eIDAS compliant.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/docage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Docage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(162, 205, 65, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Docage is an electronic signature platform and fully eIDAS compliant.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Docage Event</div>
  <div>Triggers when a defined event happen, with the help of a webhook.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contacts to Box</div>
  <div>Adds Contacts to a Box</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Boxes</div>
  <div>Adds a Contact to Boxes</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Box</div>
  <div>Creates a Box</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Full Transaction From Template</div>
  <div>Creates a full Transaction from a Transaction Template</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Box by Id</div>
  <div>Finds a Box by its Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Box by Name</div>
  <div>Finds a Box by its Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Email</div>
  <div>Finds a Contact by its Email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Id</div>
  <div>Finds a Contact by its Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Transaction by Name</div>
  <div>Finds a Transaction (or a Transaction Template) by its Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Box</div>
  <div>Finds a Box by its Name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Finds a Contact by its Email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Transaction</div>
  <div>Finds a Transaction (or a Transaction Template) by its Name</div>
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
          <title>Docage</title>
          <meta name="description" content={`Docage is an electronic signature platform and fully eIDAS compliant.`} />
        </>
      ),
    },
  };
}
