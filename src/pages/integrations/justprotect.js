import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="JustProtect"
      description={`JustProtect is a regulation and content-agnostic cloud-based platform that centralizes, automates, and simplifies the assessment process for companies with or without a GRC.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/justprotect.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        JustProtect Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(33, 149, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">JustProtect is a regulation and content-agnostic cloud-based platform that centralizes, automates, and simplifies the assessment process for companies with or without a GRC.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Assessment Received</div>
  <div>Triggers when a new assessment is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Assessment Sent</div>
  <div>Triggers when a new assessment is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assessment Updated</div>
  <div>Triggers when an assessment is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Business Unit Relationship Created</div>
  <div>Triggers when a new Business Unit is attached to my Business Unit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Assessment Templates</div>
  <div>Triggers when a new Assessment template is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Business Unit</div>
  <div>Creates a new Business Unit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Customer</div>
  <div>Create a new Customer.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Partner</div>
  <div>Add a new Partner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to a Third-Party</div>
  <div>Add a new user to a nonactive business unit I have a relation with it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User to My Account</div>
  <div>Create a new user in my company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Vendor</div>
  <div>Create a new vendor.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User From a Third-Party</div>
  <div>Delete user from a non-active business unit I have a relationship with it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User From My Account</div>
  <div>Delete user from my business unit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Relationship</div>
  <div>Remove a relationship by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send External Assessment</div>
  <div>Send external assessment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Internal Assessment</div>
  <div>Send internal assessment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Self Assessment</div>
  <div>Send self-assessment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Assessment Templates</div>
  <div>Get all assessment template related to my business unit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Out Going Assessments</div>
  <div>Search in outgoing assessments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Public User</div>
  <div>Search a Public User.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Business Unit</div>
  <div>Search business unit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Business Unit Relationship</div>
  <div>Find a business unit relationship.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Business Unit Relationship by Id</div>
  <div>Find business unit relationships by id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Ingoing Assessments</div>
  <div>Search ingoing assessments.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Users</div>
  <div>Search on users.</div>
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
          <title>JustProtect</title>
          <meta name="description" content={`JustProtect is a regulation and content-agnostic cloud-based platform that centralizes, automates, and simplifies the assessment process for companies with or without a GRC.`} />
        </>
      ),
    },
  };
}
