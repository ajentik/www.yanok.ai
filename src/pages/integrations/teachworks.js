import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Teachworks"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/teachworks.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Teachworks Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(139, 194, 32, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Teachworks is a simple, easy-to-use system that education companies use for managing teachers, students, schedules, billing and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Cost Premium</div>
  <div>Triggers when a new cost premium is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lesson Completed</div>
  <div>Triggers when a teacher is marked as completed by setting the attendance status in Teachworks.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Availability</div>
  <div>Triggers when a new availability is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Customer</div>
  <div>Triggers when a new customer (family or independent student) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Employee</div>
  <div>Triggers when a new employee is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invoice</div>
  <div>Triggers when a new invoice is approved (ie. created or updated with status set to "Approved")</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lesson</div>
  <div>Triggers when a new lesson is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lesson Participant</div>
  <div>Triggers when a new lesson participant is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Location</div>
  <div>Triggers when a new location is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Other Event</div>
  <div>Triggers when a new event is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Payment</div>
  <div>Triggers when a new payment is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Refund</div>
  <div>Triggers when a new refund is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Service</div>
  <div>Triggers when a new service is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Student</div>
  <div>Triggers when a new student is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unavailability</div>
  <div>Triggers when a new unavailability is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Wage Payment</div>
  <div>Triggers when a new wage payment has been created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Wage Tier</div>
  <div>Triggers when a new wage tier is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Child Student</div>
  <div>Creates a Child Student</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Employee</div>
  <div>Creates an Employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Family</div>
  <div>Creates a Family</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Independent Student</div>
  <div>Creates an Independent Student</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lesson</div>
  <div>Creates a Lesson</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Payment</div>
  <div>Creates a Payment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Customer Custom Field Values</div>
  <div>Updates a customer\'s Custom Profile Field Values</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Student Custom Field Values</div>
  <div>Updates a student\'s Custom Field Values</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Child Student</div>
  <div>Finds a Child Student</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Customer</div>
  <div>Finds a Customer (family or independent student). For use when selecting a customer id for other records such as students, payments, etc.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Employee</div>
  <div>Finds an employee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Family</div>
  <div>Finds a family that matches on first name, last name and email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Independent Student (Full Details)</div>
  <div>Finds an Independent Student (Customer Details)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Independent Student (Student Details)</div>
  <div>Finds an Independent Student (Student Details)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Payment</div>
  <div>Finds a Payment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Child Student</div>
  <div>Finds a Child Student</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Family</div>
  <div>Finds a family that matches on first name, last name and email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Independent Student</div>
  <div>Finds an Independent Student (Customer Details)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Payment</div>
  <div>Finds a Payment</div>
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
          <title>Teachworks</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
