import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Megaventory"
      description={`A powerful business ERP software. Inventory and Order Management. Light Manufacturing Management. Reporting.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/megaventory.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Megaventory Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(102, 149, 46, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">A powerful business ERP software. Inventory and Order Management. Light Manufacturing Management. Reporting.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete Category</div>
  <div>Triggers when a Category is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Client</div>
  <div>Triggers when a Client is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Currency</div>
  <div>Triggers when a Currency is Deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Discount</div>
  <div>Triggers when a Discount is Deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Document Type</div>
  <div>Triggers when a Document Type gets deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Inventory Location</div>
  <div>Triggers when an Inventory Location is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Pricing Rule</div>
  <div>Triggers when a Pricing Rule is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Product</div>
  <div>Triggers when a Product is Deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Supplier</div>
  <div>Triggers when a Supplier is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Tax</div>
  <div>Triggers when a Tax is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Approve Document</div>
  <div>Triggers when a Document gets approved</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Document</div>
  <div>Triggers when a Document is cancelled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Document</div>
  <div>Triggers when a Document is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reopen Document</div>
  <div>Triggers when a Document is reopened</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Document</div>
  <div>Triggers when a Document gets updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close Document</div>
  <div>Triggers when a Document is closed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Goods Transfer</div>
  <div>Triggers when a Goods Transfer is cancelled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close Goods Transfer</div>
  <div>Triggers when a Goods Transfer is closed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Goods Transfer</div>
  <div>Triggers when a Goods Transfer is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Goods Transfer Items</div>
  <div>Triggers when Goods Transfer items are received</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ship Goods Transfer Items</div>
  <div>Triggers when Goods Transfer items are shipped</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reopen Goods Transfer</div>
  <div>Triggers when a Goods Transfer is Reopened</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Goods Transfer</div>
  <div>Triggers when a Goods Tranfer is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Category</div>
  <div>Triggers when a new Category is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Client</div>
  <div>Triggers when a new Client is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Currency</div>
  <div>Triggers when a new Currency is Created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Discount</div>
  <div>Triggers when a new Discount is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document</div>
  <div>Triggers when a new Document is created in Pending state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Document Type</div>
  <div>Triggers when a new Document Type gets inserted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Goods Transfer</div>
  <div>Triggers when a new Goods Transfer Document is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inventory Location</div>
  <div>Triggers when a new Inventory Location is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Pricing Rule</div>
  <div>Triggers when a new pricing rule is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Quote</div>
  <div>Triggers when a new Sales Quote is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Supplier</div>
  <div>Triggers when a new Supplier is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tax</div>
  <div>Triggers when a new Tax is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Work Order</div>
  <div>Triggers when a new Work Order is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Purchase Order</div>
  <div>Triggers when a Purchase Order is created in Pending state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sales Order</div>
  <div>Triggers when new sales order is created in Pending state.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Product</div>
  <div>Triggers when a new Product is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Approve Purchase Order</div>
  <div>Triggers when a Purchase Order gets Approved</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Purchase Order</div>
  <div>Triggers when a Purchase Order is cancelled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close Purchase Order</div>
  <div>Triggers when a Purchase Order is closed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Purchase Order Items</div>
  <div>Triggers when a Purchase Order\'s items are invoiced (either partially or fully)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Receive Purchase Order Items</div>
  <div>Triggers when Purchase Order items are received</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reopen Purchase Order</div>
  <div>Triggers when a Purchase Order is reopened</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revert Purchase Order to Pending</div>
  <div>Triggers when a Purchase Order is reverted to Pending</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Purchase Order</div>
  <div>Triggers when a Purchase Order is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Approve Sales Order</div>
  <div>Triggers when a Sales Order gets Approved</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Sales Order</div>
  <div>Triggers when a Sales Order is Cancelled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close Sales Order</div>
  <div>Triggers when a Sales Order is closed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invoice Sales Order Items</div>
  <div>Triggers when a Sales Order\'s items are invoiced (either partially or fully)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ship Sales Order Items</div>
  <div>Triggers when a Sales Order\'s items are shipped (either partially or fully)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reopen Sales Order</div>
  <div>Triggers when a Sales Order is Reopened</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revert Sales Order to Pending</div>
  <div>Triggers when a Sales Order is reverted to Pending</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Sales Order</div>
  <div>Triggers when a Sales Order is Updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Approve Sales Quote</div>
  <div>Triggers when a Sales Quote is approved</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Sales Quote</div>
  <div>Triggers when a Sales Quote is cancelled</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close Sales Quote</div>
  <div>Triggers when a Sales Quote is closed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revert Sales Quote to Pending</div>
  <div>Triggers when a Sales Quote is reverted to Pending</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Sales Quote</div>
  <div>Triggers when a Sales Quote is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Category</div>
  <div>Triggers when a Category is Updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Client</div>
  <div>Triggers when a Client is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Currency</div>
  <div>Triggers when a Currency is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Discount</div>
  <div>Triggers when a Discount is Updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Document Type</div>
  <div>Triggers when a Document Type gets Updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Inventory Location</div>
  <div>Triggers when an Inventory Location is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Pricing Rule</div>
  <div>Triggers when a Pricing Rule is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Product</div>
  <div>Triggers when a Product is Updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Supplier</div>
  <div>Triggers when a Supplier is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Tax</div>
  <div>Triggers when a Tax is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Insert or Update a Client</div>
  <div>Creates or updates a new Client.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a New Currency</div>
  <div>Creates a new Currency.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a New Discount</div>
  <div>Creates a new Discount.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a Document</div>
  <div>Creates a new Document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Document</div>
  <div>Updates an already existing Document</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a New Inventory Location</div>
  <div>Creates a New Inventory Location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a Product Category</div>
  <div>Creates a new Product Category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert or Update a Product</div>
  <div>Creates or Updates a Product.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a Purchase Order</div>
  <div>Creates a new Purchase Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Purchase Order</div>
  <div>Updates an already existing Purchase Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a Sales Order</div>
  <div>Creates a new Sales Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Sales Order</div>
  <div>Updates an already existing Sales Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a Sales Quote</div>
  <div>Creates a new Sales Quote</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Sales Quote</div>
  <div>Updates an already existing Sales Quote</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert or Update a Supplier</div>
  <div>Creates or updates a Supplier.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a New Tax</div>
  <div>Creates a new Tax.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Insert a Work Order</div>
  <div>Creates a new Work Order.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by Id</div>
  <div>Finds an existing client by the Client ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Client by Name</div>
  <div>Finds an existing client by the Client Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Currency by Code</div>
  <div>Finds Currency by Code.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Currency by Id</div>
  <div>Finds currency by Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Discount by Id</div>
  <div>Finds existing Discount from Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Discount by Name</div>
  <div>Finds an existing Discount from the Discount Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Document by Id</div>
  <div>Finds an existing Document by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Document by Document Type ID and No</div>
  <div>Finds an existing document by the Document Type ID and Document No.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Inventory Location by Id</div>
  <div>Finds an existing location by Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Inventory Location by Name</div>
  <div>Finds an existing Inventory Location by Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Pricing Rule by Id</div>
  <div>Finds an existing Pricing Rule by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product Category by Id</div>
  <div>Finds an existing Product Category by the ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product Category by Name</div>
  <div>Finds an existing Product Category by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product by ID</div>
  <div>Finds an existing product by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Product by SKU</div>
  <div>Finds an existing product by the SKU.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Purchase Order by Id</div>
  <div>Finds An Existing Purchase Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Purchase Order by No</div>
  <div>Finds an existing Purchase Order</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sales Order by Id</div>
  <div>Finds an existing Sales Order by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sales Order by No</div>
  <div>Finds an existing Sales Order by No</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sales Quote by Id</div>
  <div>Finds an existing Sales Quote by Id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sales Quote by No</div>
  <div>Finds An Existing Sales Quote by No</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Shipping Provider by Id</div>
  <div>Finds an existing Shipping Provider by the Shipping Provider Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Shipping Provider by Name</div>
  <div>Finds an existing Shipping provider from the Shipping Provider Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Supplier by Id</div>
  <div>Finds an existing supplier by the Supplier ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Supplier by Name</div>
  <div>Finds an existing supplier by the Supplier Name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tax by ID</div>
  <div>Finds an existing Tax from the Tax Id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Tax by Name</div>
  <div>Finds an existing tax by the tax name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Work Order by ID</div>
  <div>Finds an existing Work Order by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Work Order by No</div>
  <div>Finds an existing Work Order by No.</div>
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
          <title>Megaventory</title>
          <meta name="description" content={`A powerful business ERP software. Inventory and Order Management. Light Manufacturing Management. Reporting.`} />
        </>
      ),
    },
  };
}
