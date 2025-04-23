import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="GoFileRoom"
      description={`GoFileRoom is a cloud-based document management and workflow solution. With the GoFileRoom connector, you can perform document, user management, and FirmFlow actions.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/gofileroom.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        GoFileRoom Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 191, 16, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">GoFileRoom is a cloud-based document management and workflow solution. With the GoFileRoom connector, you can perform document, user management, and FirmFlow actions.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Assign Group Permissions</div>
  <div>Assign Group Permissions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign User Permissions</div>
  <div>Assign User Permissions within GoFileRoom</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Group</div>
  <div>Create Group within GoFileRoom</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Create User within GoFileRoom</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Password Policy</div>
  <div>Get Password Policy</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Reports</div>
  <div>Get Reports within GoFileRoom</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Upload Locations</div>
  <div>Get Upload Locations</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Modify Group</div>
  <div>Modify Group within GoFileRoom</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Modify User</div>
  <div>Modify GoFileRoom User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set Group Document Security</div>
  <div>Set Group Document Security</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set User Document Security</div>
  <div>Set User Document Security for GoFileRoom User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Group Document Security</div>
  <div>Get Group Document Security</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Group Permissions</div>
  <div>Get Group Permissions</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Licenses</div>
  <div>Get Licenses from GoFileRoom</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User Document Security</div>
  <div>Get User Document Security</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User Info</div>
  <div>Get User Info of GoFileRoom User</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User Permissions</div>
  <div>Get User Permissions for GoFileRoom User</div>
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
          <title>GoFileRoom</title>
          <meta name="description" content={`GoFileRoom is a cloud-based document management and workflow solution. With the GoFileRoom connector, you can perform document, user management, and FirmFlow actions.`} />
        </>
      ),
    },
  };
}
