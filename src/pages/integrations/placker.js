import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Placker"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/placker.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Placker Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(84, 112, 205, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Placker provides planning and tracking tools to save time, avoid mistakes and get work done.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Card Related Events</div>
  <div>Triggers when card is created, removed, archived, unarchived or card status is changed. You can fetch card details to retrieve more card data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comment Related Events</div>
  <div>Triggers when a comment is added, updated or deleted. You can fetch card details to retrieve more card data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Label Related Events</div>
  <div>Triggers when label is added or removed from a card. You can fetch card details to retrieve more card data.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Label to Card</div>
  <div>This action allows to add selected label to card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card</div>
  <div>This action allows to create card on a selected list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Label From Card</div>
  <div>This action allows to remove selected label from card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Card</div>
  <div>This action allows to update a selected card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Board Labels</div>
  <div>Get labels available on Board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Card Details</div>
  <div>Get single card details by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Cards</div>
  <div>Search cards by given criteria.</div>
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
          <title>Placker</title>
        </>
      ),
    },
  };
}
