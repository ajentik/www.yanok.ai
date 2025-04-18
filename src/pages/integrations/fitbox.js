import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="fitbox"
      description="fitbox is an essential gym management software for member, billing, workout, and class management backed by an innovative business model that turns every dollar you spend into free credit that can be used to improve your gym, or reduce operating costs."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/fitbox.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        fitbox Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(119, 117, 230, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">fitbox is an essential gym management software for member, billing, workout, and class management backed by an innovative business model that turns every dollar you spend into free credit that can be used to improve your gym, or reduce operating costs.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">User Profile Changed</div>
  <div>Triggers when a user or staff memeber updates a user profile. e.g User updates Weight in fitbox</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Status Changed</div>
  <div>Triggers when the users status changes at your gym. e.g moved from pending to active or active to archived.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Subscription Changed</div>
  <div>Triggers when a subscription is added or changes. eg active to cancelled</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Register User</div>
  <div>Creates a user as prospect in fitbox.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Update user profile properties in fitbox</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User</div>
  <div>get a fitbox user by id or email address</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Users Next Session</div>
  <div>Finds the uses next session/booking</div>
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
          <title>fitbox</title>
          <meta name="description" content="fitbox is an essential gym management software for member, billing, workout, and class management backed by an innovative business model that turns every dollar you spend into free credit that can be used to improve your gym, or reduce operating costs." />
        </>
      ),
    },
  };
}
