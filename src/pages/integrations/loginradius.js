import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LoginRadius"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/loginradius.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LoginRadius Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 141, 207, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LoginRadius is a Customer Identity Management (cIAM) platform that allows you to easily manage your customer data.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Email Added</div>
  <div>Triggers when a customer adds a new Email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Roles Assigned</div>
  <div>Triggers when roles are assigned to a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Blocked</div>
  <div>Triggers when a customer is blocked.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Password Changed</div>
  <div>Triggers when a customer changes their password.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Delete</div>
  <div>Triggers when an account is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Verified</div>
  <div>Triggers when a customer completes Email Verification.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Linked</div>
  <div>Triggers when 2 accounts are merged via Account Linking.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Login</div>
  <div>Triggers when a customer logs in.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Registration</div>
  <div>Triggers when a customer registers.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Password Reset</div>
  <div>Triggers when a customer resets their password.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Password Set</div>
  <div>Triggers when the password is set on an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">UserName Set</div>
  <div>Triggers when a UserName is set on an account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Roles Unassigned</div>
  <div>Triggers when roles are unassigned from a customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Unlinked</div>
  <div>Triggers when two profiles are unmerged into 2 seperate accounts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Phone ID</div>
  <div>Triggers when a there is an update to the PhoneID field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Profile Updated</div>
  <div>Triggers when a profile is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Phone Number Verified</div>
  <div>Triggers when a customer completes phone verification.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>LoginRadius</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
