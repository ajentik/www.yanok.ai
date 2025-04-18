import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Moneybird"
      description="Moneybird provides cloud accounting for SME's in Holland."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/moneybird.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Moneybird Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(50, 145, 240, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Moneybird provides cloud accounting for SME\'s in Holland.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quote</div>
  <div>Triggers when a new quote is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Invoice</div>
  <div>Triggers when a new sales invoice is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Attachment to New Document</div>
  <div>Add an attachment to a new document (use in combination with Create Document).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a new contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Document</div>
  <div>Create a new document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quote</div>
  <div>Create a new quote</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Sales Invoice</div>
  <div>Create a new sales invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Sales Invoice</div>
  <div>Send a sales invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tax Rate</div>
  <div>Finds a tax rate.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create contact</div>
  <div>Finds a contact.</div>
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
          <title>Moneybird</title>
          <meta name="description" content="Moneybird provides cloud accounting for SME's in Holland." />
        </>
      ),
    },
  };
}
