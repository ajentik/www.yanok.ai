import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="COR"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cor.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        COR Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(232, 205, 59, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">COR is the all-in-one management solution for creative agencies that automate timesheets, through AI, to predict profitability, reduce work overload and improve client engagements.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Brand</div>
  <div>Triggers when a new Brand is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Triggers when a new Client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Hour</div>
  <div>Triggers when a new Hour is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Invoice</div>
  <div>Triggers when a new Invoice is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Product</div>
  <div>Triggers when a new Product is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Triggers when a new Project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Triggers when a new Task is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Triggers when a new User is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Brand</div>
  <div>Triggers when a new Brand is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Client</div>
  <div>Triggers when a new Client is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Hour</div>
  <div>Triggers when a new Hour is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Product</div>
  <div>Triggers when a new Product is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project</div>
  <div>Triggers when a new Project is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Triggers when a new User is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Triggers when a new Client is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Triggers when a new Project is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Triggers when a new Task is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Triggers when a new User is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Client</div>
  <div>Creates a Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Fee</div>
  <div>Creates a new Fee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a project in your COR Instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quickbooks Invoice</div>
  <div>Creates Quickbooks Invoice</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Client</div>
  <div>Deletes a client in your COR Instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Hour</div>
  <div>Deletes a hour in your COR Instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project</div>
  <div>Deletes a project in your COR Instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Updates a Client</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project in your COR Instance.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quickbooks Expense</div>
  <div>Create a QuickBooks Expense</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Updates a Task.</div>
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
          <title>COR</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
