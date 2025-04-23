import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Storage by Zapier"
      description={`Quickly store and retrieve small values of data. Allows you to reference data between Zap runs or share data between different Zaps.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/storage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Storage by Zapier Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 74, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Quickly store and retrieve small values of data. Allows you to reference data between Zap runs or share data between different Zaps.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Increment Value</div>
  <div>Increment a value at a defined key.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Pop Value From List</div>
  <div>Pop a value off a list of values, removing the value from the list. Optionally, return a default value if the list is empty.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Push Value Onto List</div>
  <div>Push a value onto a list of values.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove All Values</div>
  <div>Removes all values for the connected account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Child Value</div>
  <div>Remove one or more child values stored at a defined key.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Value</div>
  <div>Remove a value stored at a defined key. Also works if the value is a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Child Value</div>
  <div>Set one or more child values stored at a defined key.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Multiple Values</div>
  <div>Set multiple values stored at a defined keys.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Value</div>
  <div>Set a value stored at a defined key.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Value If</div>
  <div>Set a value stored at a defined key if the stored value matches a previous value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get All Values</div>
  <div>Get all values stored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Child Value</div>
  <div>Get a child value stored at a defined key. Optionally, create a new child value if none has been stored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get List Values</div>
  <div>Get all values from a list and format their output as one value.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Multiple Values</div>
  <div>Get multiple values stored at defined keys.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Secret</div>
  <div>Get your Store secret as a value for use in a Code step.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Value</div>
  <div>Get a value stored at a defined key. Optionally, create a new value if none has been stored.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get or Set a Child Value</div>
  <div>Get or Set a Child Value</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get or Set a Value</div>
  <div>Get or Set a Value</div>
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
          <title>Storage by Zapier</title>
          <meta name="description" content={`Quickly store and retrieve small values of data. Allows you to reference data between Zap runs or share data between different Zaps.`} />
        </>
      ),
    },
  };
}
