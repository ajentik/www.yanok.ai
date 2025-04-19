import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="MemberVault"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/membervault.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        MemberVault Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(45, 55, 72, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">MemberVault is a Relationship Marketing Platform that allows users to host courses, membership and other digital products in one place.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Completed Lesson</div>
  <div>Triggers when a user completes a selected lesson in your account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Completed Module</div>
  <div>Triggers when a user completes a selected module in your account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Earned X EP</div>
  <div>Triggers when a user reaches the configured EP number</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Hot Lead</div>
  <div>Triggers when a user becomes a Hot Lead</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Completes an Action</div>
  <div>Triggers when a user completes an action in your account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Added to a Product</div>
  <div>Triggers when a user is signs up for a specified product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Email Consent</div>
  <div>Triggers when a user approved or denies email consent</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User to Product</div>
  <div>This action will add a user to a product and create a login for them automatically if they don\'t already have one for your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove User From Product</div>
  <div>Removes selected user from a product</div>
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
          <title>MemberVault</title>
        </>
      ),
    },
  };
}
