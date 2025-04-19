import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Finolog"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/finolog.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Finolog Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(84, 126, 254, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Finolog is a money accounting app for small and medium businesses. It shows all money flows in one safe place, predicts cash gaps and much more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Category</div>
  <div>Triggers when a new category is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when new company was created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contractor</div>
  <div>Triggers when new contractor is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Requisite</div>
  <div>Triggers when a new requisite is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Transaction</div>
  <div>Triggers when a new transaction is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates an Account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Category</div>
  <div>Creates a Category</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a Company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contractor</div>
  <div>Creates a Contractor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Transaction</div>
  <div>Creates a Transaction</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contractor by Query</div>
  <div>FInd contractor by name or his requisites</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contractor Requisites</div>
  <div>Finds a Requisites that blongs to a Contractor</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Transaction by Query</div>
  <div>Find transaction by contractor name, account name, details or sum</div>
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
          <title>Finolog</title>
        </>
      ),
    },
  };
}
