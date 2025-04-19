import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Iterable"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/iterable.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Iterable Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(230, 88, 37, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Iterable is the growth marketing platform that empowers you to deliver completely seamless, personalized customer experiences.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a User</div>
  <div>Add new user profile data.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Track Event</div>
  <div>Create a custom event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Track a Purchase</div>
  <div>Tracks when a user makes a purchase. Also clears shoppingCartItems on the user profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a User\'s Shopping Cart Items</div>
  <div>Update the "shoppingCartItems" field on the user profile with shopping cart items. User profile is updated if it already exists (created otherwise).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a User</div>
  <div>Update user profile data.</div>
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
          <title>Iterable</title>
        </>
      ),
    },
  };
}
