import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="reteach"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/reteach.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        reteach Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(177, 249, 188, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Reteach is the powerful e-learning software from Germany. Education providers and companies use educats to easily offer learning content in their own online academy.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Participation Completed</div>
  <div>Triggers when a course participation is completed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Removed</div>
  <div>Triggers when a course is removed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Removed</div>
  <div>Triggers when a customer is removed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Created</div>
  <div>Triggers when a new course is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Created</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">E-Commerce Order Confirmed</div>
  <div>Triggers when a new order was confirmed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Participation Created</div>
  <div>Triggers when a new course participation is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Created</div>
  <div>Triggers when a new Tag is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Import Processed</div>
  <div>Triggers when a customer import was processed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Updated</div>
  <div>triggers when course updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Customer Updated</div>
  <div>Triggers when a Customer is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Tag to Customer</div>
  <div>Assigns a tag to a customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Course</div>
  <div>Create a single course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign Customer to Course</div>
  <div>Assigns a single customer to a course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer</div>
  <div>Creates a customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Customer Group</div>
  <div>Creates a single customer group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Tag</div>
  <div>Creates a single tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Customer From Course</div>
  <div>Removes a course assignment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Customer Group</div>
  <div>Removes a single customer group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag</div>
  <div>Removes a single tag</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Disable Customer</div>
  <div>Disables a customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Academy Info</div>
  <div>Gets the basic academy information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Course</div>
  <div>Gets a single course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Course Assignment</div>
  <div>Gets a single course assignment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Customer</div>
  <div>Gets a single customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Customer Group</div>
  <div>Gets a single customer group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get E-Commerce Order</div>
  <div>Gets a single e-commerce order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Course Participation</div>
  <div>Gets a single course participation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Customer</div>
  <div>Removes a tag from a customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Course Invitation</div>
  <div>Sends a course invitation mail to a customer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Academy Invitation</div>
  <div>Send an academy invitation to a customer by email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer</div>
  <div>Updates a single customer by email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Tag</div>
  <div>Updates a single tag</div>
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
          <title>reteach</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
