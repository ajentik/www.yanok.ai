import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Acadle"
      description="Plug and Play in 2 hours, Train your employees, partners and customers at scale and with zero tech skills !"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/acadle.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Acadle Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(16, 183, 89, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Plug and Play in 2 hours, Train your employees, partners and customers at scale and with zero tech skills !</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed</div>
  <div>Triggers when a new course is completed by a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Course</div>
  <div>Triggers when a new course is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Group</div>
  <div>Triggers when a new group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Activated</div>
  <div>Triggers when a new user is activated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Deactivated</div>
  <div>Triggers when a new user is deactivated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Action for Creates a User</div>
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
          <title>Acadle</title>
          <meta name="description" content="Plug and Play in 2 hours, Train your employees, partners and customers at scale and with zero tech skills !" />
        </>
      ),
    },
  };
}
