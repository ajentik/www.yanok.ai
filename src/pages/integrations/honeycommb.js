import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Honeycommb"
      description={`Launch a social network you own & control with the most complete white-label social network platform in the world`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/honeycommb.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Honeycommb Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 147, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Launch a social network you own & control with the most complete white-label social network platform in the world</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Preapproval</div>
  <div>Creates a Preapproval in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Chat Message</div>
  <div>Create a Chat Message in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Group Follow</div>
  <div>Create a Group follow between a user and a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Group Join Request</div>
  <div>Creates a Group Join Request</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Post</div>
  <div>Create a Post in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Post Flag</div>
  <div>Create a Post Flag in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a User</div>
  <div>Creates a User in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a User Follow</div>
  <div>Create a Follow between two users.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete a Follow</div>
  <div>Delete a Follow in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete a User</div>
  <div>Delete a User in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Chat</div>
  <div>Finds or Creates a Chat in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a User Subscription</div>
  <div>Finds or Creates a User Subscription in Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Group Join Request</div>
  <div>Updates a Group Join Request</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Post</div>
  <div>Update a Post on Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a User</div>
  <div>Updates a User on Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Group</div>
  <div>Find a Group on Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Post</div>
  <div>Find a post on Honeycommb</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Find a specific user on Honeycommb</div>
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
          <title>Honeycommb</title>
          <meta name="description" content={`Launch a social network you own & control with the most complete white-label social network platform in the world`} />
        </>
      ),
    },
  };
}
