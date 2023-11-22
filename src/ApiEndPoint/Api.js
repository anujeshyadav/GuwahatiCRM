// Guwahati open
export const Create_warehouse_xmlView = "/warehouse/get-xml";
export const Create_warehouse_save = "/warehouse/save-warehouse";
export const Create_Party_XML = "/party/get-xml";
export const Create_Party_save = "/party/save-party";
export const Create_Party_List = "/party/view-party";
export const Create_Warehouse_List = "/warehouse/view-warehouse";
export const Create_transporter_xmlView = "/transporter/get-xml";
export const Create_transporter_save = "/transporter/save-transporter";
export const Create_Transporter_List = "/transporter/view-transporter";

export const Create_Category = "/categories/save-category";
export const Category_List = "/categories/view-category";
export const Create_SubCategory = "/categories/save-subcategory";
export const Create_Product_XMLView = "/product/get-xml";
export const Save_Product = "/product/save-product";
export const ProductList_View = "/product/view-product";

// Guwahati close

export const Create_Account_xmlView = "/user/get-xml";
export const Create_Customer_xmlView = "/customer/get-xml";
export const Create_Customer_save = "/customer/save-customer";
export const Create_Account_save = "/user/save-user";
export const Create_Account_List = "/user/view-user";
export const Create_Customer_List = "/customer/view-customer";
export const Create_Account_Update = "/user/update-user/";
export const Delete_Account_List = "/user/delete-user/";
export const Delete_Customer_List = "/customer/delete-customer/";
export const Create_Parts = "/part-config/createParts";
export const customerRegistration = "/account/customerRegistration";

// import
export const Part_catelougue = "/part-catalogue/save-part-catalogue";
export const SpartPart_Upload = "/spare-parts/save-spare-parts";
export const Products_Upload =
  "/product-registration/save-product-registration";
export const orders_Upload = "/orders/save-orders";
export const orders_ID = "create-orders/view-create-order";
export const Inspection_Upload = "/inspection/save-inspection";
export const Invoice_Upload = "/invoice-billing/save-invoice-billing";
export const Supports_Upload = "/support/save-support";
export const Service_Upload = "/servicing/save-servicing";
export const Warehouse_Upload = "/warehouse/save-warehouse";
export const Distributor_Upload = "/distributors/save-distributor";
export const Dealer_Upload = "/dealers/save-dealer";
export const Supplier_Upload = "/suppliers/save-supplier";
export const ServiceCenter_Upload = "/service-centers/save-service-center";
export const Customer_Upload = "/customer/save-customer-data";
export const Campaign_Upload = "/campaign/save-campaign";
export const Service_Rate_Upload = "/service-rate/save-service-rate";
export const Warrenty_Upload = "/warranty/save-warranty";

// end

// upload List
export const Spare_PartsView = "/spare-parts/view-spare-parts"; // done
export const SparePart_CatalogueList = "/part-catalogue/get-part-catalogue"; // done
export const CampaignList_View = "/campaign/view-campaign"; // done
export const WarrentyUpload_View = "/warranty/view-warranty";
export const Orders_View = "/orders/view-orders"; // done
export const SupportsUpload_View = "/support/view-support"; //done
export const Inspection_View = "/inspection/view-inspection"; // done
export const Servicing_View = "/servicing/view-servicing"; // done
export const WareHouseUpload_View = "/warehouse/view-warehouse";
export const ProductUpload_View =
  "/product-registration/view-product-registration";
export const invoice_billing_View = "/invoice-billing/view-invoice-billing"; // done
export const Customer_Upload_View = "/customer/view-customer-data";
export const Distributor_View = "/distributors/view-distributor";
export const Dealers_View = "/dealers/view-dealer";
export const Supplier_View = "/suppliers/view-supplier"; // done
export const SerViceCenter_View = "/service-centers/view-service-center";
export const Part_CatalogueView = "/part-catalogue/view-parts"; //done
export const Sevice_Card_List = "/service-rate/view-service-rate"; //done
export const Sevice_Card_DeleteOne = "/service-rate/delete-service-rate/"; //done
//end Uploads list

// warranty
export const Warranty_View = "/warranty/get-xml"; //done
export const Warranty_Save = "/warranty/save-warranty"; //done
export const WarrantyList_View = "/warranty/view-warranty";
export const Warranty_Delete = "/warranty/delete-warranty/";
export const Warranty_Update = "/warranty/update-warranty/";
export const Warranty_AuditHistory =
  "/audit-history/save-warranty-audit-history"; //post
export const Warranty_AuditHistoryList =
  "/audit-history/view-warranty-audit-history"; //get
export const Warranty_AuditHistoryViewone =
  "/audit-history/view-warranty-audit-history-by-id/"; //get

// Order
export const CreaterOrder_View = "/orders/get-xml"; //done
export const Order_ViewList = "/create-orders/view-create-order"; //done
export const AddOrderComment = "/create-orders/comment-add/"; //done
export const PlaceOrder_post = "/orders/place-order/"; //done

// Inspection
export const Inspection_XMLView = "/inspection/get-xml"; //done
// product wiki
export const productwiki_View = "/product-wiki/createWiki"; //done
// ticketTool
export const ticketTool_View = "/ticket-tool/get-xml"; //done
export const ticketTool_Save = "/ticket-tool/save-ticket-tool"; //done
export const ticketTool_List = "/ticket-tool/view-ticket-tool"; //done
export const ticketTool_deleteList = "/ticket-tool/delete-ticket-tool/"; //done

export const Spare_Parts = "/part-catalogue/get-spare-parts";
export const Parts_Catalogue = "/part-catalogue/get-partscatalogue-parts";
export const GET_PARTS_CATELOGUE = "/part-catalogue/get-part-catalogue";
export const Order_Parts = "/part-catalogue/get-orders-parts";
export const AddSupplierView = "/create-supplier/createSupplier";
export const createWikiView = "/product-wiki/createWiki";
export const createQuoteView = "/create-quote/create-quote";
export const createWarehouseView = "/create-warehouse/create-warehouse";

// login Api End  Points
export const Login_User = "/create-account/signin";
export const Login_OTP = "/create-account/verify-otp";
export const Edit_Profile = "/create-account/edit-profile/";

// part catalougue

// Policy
export const PolicyView = "/policy/get-xml";
export const Savepolicy = "/policy/save-policy";
export const Delete_Policy = "/policy/delete-policy/";
export const SearchPolicy = "/policy/view-policies";
// Add to Cart PartsCatelougue
export const Add_To_Cart_PartsCatelougue = "/cart/add-to-cart";
export const Add_To_Cart_Get = "/cart/get-cart-items/";
export const Delete_CartItem_PartsCat = "/cart/remove-cart-item";

// currency converter api
export const Currency_Convertor = "https://api.exchangerate-api.com/v4/latest/";

// delivery Address
export const GET_Delivery_Address = "/deliveryAddress/get-delivery-address/";
export const Delete_Delivery_Address =
  "/deliveryAddress/delete-delivery-address/";
export const Save_Delivery_Address = "/deliveryAddress/save-delivery-address";

// end Delivery Address

// product WIKI
export const CRAETE_PRODUCT_WIKI = "/product-wiki/save-product-wiki";
export const VIEW_PRODUCT_WIKI = "/product-wiki/view-product-wiki";
export const DELETE_PRODUCT_WIKI = "/product-wiki/delete-product-wiki/";
export const UPDATE_PRODUCT_WIKI = "/product-wiki/update-product-wiki/";
export const COMMENT_PRODUCT_WIKI = "/product-wiki/comment-add/";
