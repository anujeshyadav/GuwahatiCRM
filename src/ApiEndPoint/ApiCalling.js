import {
  Create_Account_xmlView,
  Create_Parts,
  customerRegistration,
  Product_Registration,
  Warranty_AuditHistory,
  Warranty_AuditHistoryList,
  Warranty_AuditHistoryViewone,
  Sevice_Card_List,
  ticketTool_deleteList,
  Warranty_Delete,
  Create_Account_save,
  Create_Account_List,
  Delete_Account_List,
  Add_To_Cart_PartsCatelougue,
  Create_Account_Update,
  SpartPart_Upload,
  orders_Upload,
  Inspection_Upload,
  Invoice_Upload,
  ServiceCenter_Upload,
  Supplier_Upload,
  Supports_Upload,
  Customer_Upload,
  PlaceOrder_post,
  Campaign_Upload,
  Dealer_Upload,
  Distributor_Upload,
  Warehouse_Upload,
  Service_Upload,
  Part_catelougue,
  Sevice_Card_DeleteOne,
  Service_Rate_Upload,
  Products_Upload,
  Delete_CartItem_PartsCat,
  Spare_Parts,
  Parts_Catalogue,
  GET_PARTS_CATELOGUE,
  Inspection_XMLView,
  Order_Parts,
  ticketTool_Save,
  ticketTool_List,
  Login_User,
  Login_OTP,
  Part_CatalogueView,
  AddSupplierView,
  createWikiView,
  CRAETE_PRODUCT_WIKI,
  createQuoteView,
  createWarehouseView,
  Spare_PartsView,
  SparePart_CatalogueList,
  Orders_View,
  Add_To_Cart_Get,
  CampaignList_View,
  Edit_Profile,
  SupportsUpload_View,
  Inspection_View,
  Servicing_View,
  WareHouseUpload_View,
  Customer_Upload_View,
  SearchPolicy,
  invoice_billing_View,
  Dealers_View,
  Delete_Delivery_Address,
  Save_Delivery_Address,
  Supplier_View,
  SerViceCenter_View,
  WarrentyUpload_View,
  Warranty_View,
  WarrantyList_View,
  Warranty_Save,
  GET_Delivery_Address,
  Distributor_View,
  ProductUpload_View,
  PolicyView,
  Currency_Convertor,
  Delete_Policy,
  Savepolicy,
  PolicySaveData,
  VIEW_PRODUCT_WIKI,
  COMMENT_PRODUCT_WIKI,
  DELETE_PRODUCT_WIKI,
  productwiki_View,
  ticketTool_View,
  CreaterOrder_View,
  AddOrderComment,
  Order_ViewList,
  orders_ID,
} from "./Api";
import axiosConfig from "../axiosConfig";
import dotenv from "dotenv";
import { data } from "../views/apps/ecommerce/shop/shopData";
dotenv.config();

// const apiKey = process.env.REACT_APP_API_KEY;

// const secretKey = process.env.REACT_APP_SECRET_KEY;
// console.log(`API Key: ${apiKey}`);
// console.log(`Secret Key: ${secretKey}`);

export const UserLogin = async (data) => {
  let response = await axiosConfig
    .post(Login_User, data)
    .then((res) => res.data);
  return response;
};
export const UserOTPVerify = async (data) => {
  let response = await axiosConfig
    .post(Login_OTP, data)
    .then((res) => res.data);
  return response;
};
export const EditUserProfile = async (id, data) => {
  let response = await axiosConfig
    .post(Edit_Profile + id, data)
    .then((res) => res.data);
  return response;
};
export const CreateRole = async () => {
  let response = await axiosConfig
    .post(`/admin/getProduct`)
    .then((res) => res.data);
  return response;
};
export const CreateAccountView = async () => {
  let response = await axiosConfig
    .get(`${Create_Account_xmlView}`)
    .then((res) => res.data);
  return response;
};
export const CreateAccountSave = async (data) => {
  let response = await axiosConfig
    .post(`${Create_Account_save}`, data)
    .then((res) => res.data);
  return response;
};
// export const DeleteAccount = async id => {
//   console.log(id);
export const DeleteAccount = async (id) => {
  let response = await axiosConfig
    .get(`${Delete_Account_List}` + id)
    .then((res) => res.data);
  return response;
};
export const CreateAccountList = async (data) => {
  let response = await axiosConfig
    .get(`${Create_Account_List}`, data)
    .then((res) => res.data);
  return response;
};
export const CreateAccountUpdate = async (id, formdata) => {
  console.log(id, formdata);
  let response = await axiosConfig
    .post(`${Create_Account_Update}` + id, formdata)
    .then((res) => res.data);
  return response;
};

export const CreateParts = async () => {
  let response = await axiosConfig
    .get(`${Create_Parts}`)
    .then((res) => res.data);
  return response;
};
export const Customer_Registration = async () => {
  let response = await axiosConfig
    .get(`${customerRegistration}`)
    .then((res) => res.data);
  return response;
};

// part
// export const PartCatelougue = async formdata => {
// part upload
export const PartCatelougue = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Part_catelougue}`, formdata)
    .then((res) => res.data);
  return response;
};
export const SpareParts = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${SpartPart_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const ProdctsUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Products_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const Orders = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${orders_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const InspectionUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Inspection_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const InvoiceUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Invoice_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const SupporttUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Supports_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const ServicingUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Service_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const WareHouseUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Warehouse_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const DistributorUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Distributor_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const DealerUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Dealer_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const SupplierUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Supplier_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const ServiceCenterUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${ServiceCenter_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const CustomerDataUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Customer_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const CampaignUpload = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Campaign_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};
export const ServiceRate = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Service_Rate_Upload}`, formdata)
    .then((res) => res.data);
  return response;
};

// End import xls file

export const PartCatalogueView = async () => {
  let response = await axiosConfig
    .get(`${Part_CatalogueView}`)
    .then((res) => res.data);
  return response;
};

export const SparesPartsList = async () => {
  let response = await axiosConfig
    .get(`${Spare_Parts}`)
    .then((res) => res.data);
  return response;
};
export const SparesPartsView = async () => {
  let response = await axiosConfig
    .get(`${Spare_PartsView}`)
    .then((res) => res.data);
  return response;
};
export const SparePart_List = async () => {
  let response = await axiosConfig
    .get(`${SparePart_CatalogueList}`)
    .then((res) => res.data);
  return response;
};
export const OrdersViewList = async () => {
  let response = await axiosConfig
    .get(`${Orders_View}`)
    .then((res) => res.data);
  return response;
};
export const SupportsUploadView = async () => {
  let response = await axiosConfig
    .get(`${SupportsUpload_View}`)
    .then((res) => res.data);
  return response;
};
export const InspectionView = async () => {
  let response = await axiosConfig
    .get(`${Inspection_View}`)
    .then((res) => res.data);
  return response;
};
export const ServicingView = async () => {
  let response = await axiosConfig
    .get(`${Servicing_View}`)
    .then((res) => res.data);
  return response;
};
export const SeviceCardList = async () => {
  let response = await axiosConfig
    .get(`${Sevice_Card_List}`)
    .then((res) => res.data);
  return response;
};
export const SeviceCardDeleteOne = async (id) => {
  let response = await axiosConfig
    .get(`${Sevice_Card_DeleteOne}` + id)
    .then((res) => res.data);
  return response;
};
export const WareHouseUploadView = async () => {
  let response = await axiosConfig
    .get(`${WareHouseUpload_View}`)
    .then((res) => res.data);
  return response;
};
export const ProductUploadView = async () => {
  let response = await axiosConfig
    .get(`${ProductUpload_View}`)
    .then((res) => res.data);
  return response;
};
export const invoice_billingView = async () => {
  let response = await axiosConfig
    .get(`${invoice_billing_View}`)
    .then((res) => res.data);
  return response;
};
export const CustomerUploadView = async () => {
  let response = await axiosConfig
    .get(`${Customer_Upload_View}`)
    .then((res) => res.data);
  return response;
};
export const DistributorView = async () => {
  let response = await axiosConfig
    .get(`${Distributor_View}`)
    .then((res) => res.data);
  return response;
};
export const DealersView = async () => {
  let response = await axiosConfig
    .get(`${Dealers_View}`)
    .then((res) => res.data);
  return response;
};
export const SupplierView = async () => {
  let response = await axiosConfig
    .get(`${Supplier_View}`)
    .then((res) => res.data);
  return response;
};
export const SerViceCenterView = async () => {
  let response = await axiosConfig
    .get(`${SerViceCenter_View}`)
    .then((res) => res.data);
  return response;
};

// End upload Listing
export const CampaignListView = async () => {
  let response = await axiosConfig
    .get(`${CampaignList_View}`)
    .then((res) => res.data);
  return response;
};
export const WarrentyUploadView = async () => {
  let response = await axiosConfig
    .get(`${WarrentyUpload_View}`)
    .then((res) => res.data);
  return response;
};
export const WarrantyAuditHistory = async () => {
  let response = await axiosConfig
    .get(`${Warranty_AuditHistory}`)
    .then((res) => res.data);
  return response;
};
export const WarrantyAuditHistoryViewOne = async (id) => {
  let response = await axiosConfig
    .get(`${Warranty_AuditHistoryViewone}` + id)
    .then((res) => res.data);
  return response;
};
export const WarrantyAuditHistoryList = async () => {
  let response = await axiosConfig
    .get(`${Warranty_AuditHistoryList}`)
    .then((res) => res.data);
  return response;
};

export const PartsCatalogueList = async () => {
  let response = await axiosConfig
    .get(`${Parts_Catalogue}`)
    .then((res) => res.data);
  return response;
};
export const GetPartsCatalogue = async () => {
  let response = await axiosConfig
    .get(`${GET_PARTS_CATELOGUE}`)
    .then((res) => res.data);
  return response;
};
export const OrderPartsList = async () => {
  let response = await axiosConfig
    .get(`${Order_Parts}`)
    .then((res) => res.data);
  return response;
};
export const AddSupplierViewData = async () => {
  let response = await axiosConfig
    .get(`${AddSupplierView}`)
    .then((res) => res.data);
  return response;
};
export const createWikiViewData = async () => {
  let response = await axiosConfig
    .get(`${createWikiView}`)
    .then((res) => res.data);
  return response;
};
export const createQuoteViewData = async () => {
  let response = await axiosConfig
    .get(`${createQuoteView}`)
    .then((res) => res.data);
  return response;
};

export const createWarehouseViewData = async () => {
  let response = await axiosConfig
    .get(`${createWarehouseView}`)
    .then((res) => res.data);
  return response;
};
export const PolicyViewData = async () => {
  let response = await axiosConfig.get(`${PolicyView}`).then((res) => res.data);
  return response;
};
export const PolicySaveDataapis = async (formdata) => {
  let response = await axiosConfig
    .post(`${Savepolicy}`, formdata)
    .then((res) => res.data);
  return response;
};
export const PolicyGet = async (formdata) => {
  let response = await axiosConfig
    .get(`${SearchPolicy}`)
    .then((res) => res.data);
  return response;
};
export const DeletePolicy = async (id) => {
  let response = await axiosConfig
    .get(`${Delete_Policy}` + id)
    .then((res) => res.data);
  return response;
};

// ADD TO CART PART CATALOUGUE

export const AddCartsPartsCatalgue = async (data) => {
  let response = await axiosConfig
    .post(`${Add_To_Cart_PartsCatelougue}`, data)
    .then((res) => res.data);
  return response;
};

export const AddToCartGet = async (id) => {
  let response = await axiosConfig
    .get(`${Add_To_Cart_Get}` + id)
    .then((res) => res.data);
  return response;
};
export const DeleteCartItemPartsCatelogue = async (data) => {
  let response = await axiosConfig
    .post(`${Delete_CartItem_PartsCat}`, data)
    .then((res) => res.data);
  return response;
};

// currency convertor

export const CurrencyConvertor = async (currency) => {
  let response = await axiosConfig
    .get(`${Currency_Convertor}` + currency)
    .then((res) => res.data);
  return response;
};

// Delivery Address
export const GetDeliveryAddress = async (id) => {
  let response = await axiosConfig
    .get(`${GET_Delivery_Address}` + id)
    .then((res) => res.data);
  return response;
};
export const DeleteDeliveryAddress = async (id) => {
  let response = await axiosConfig
    .get(`${Delete_Delivery_Address}` + id)
    .then((res) => res.data);
  return response;
};
export const SaveDeliveryAddress = async (data) => {
  let response = await axiosConfig
    .post(`${Save_Delivery_Address}`, data)
    .then((res) => res.data);
  return response;
};

// end Delivery address

// warranty

export const Warranty_ViewData = async () => {
  let response = await axiosConfig
    .get(`${Warranty_View}`)
    .then((res) => res.data);
  return response;
};
export const WarrantyListView = async () => {
  let response = await axiosConfig
    .get(`${WarrantyList_View}`)
    .then((res) => res.data);
  return response;
};
export const WarrantyDelete = async (id) => {
  let response = await axiosConfig
    .get(`${Warranty_Delete}` + id)
    .then((res) => res.data);
  return response;
};
export const WarrantySave = async (data) => {
  let response = await axiosConfig
    .post(`${Warranty_Save}`, data)
    .then((res) => res.data);
  return response;
};

// Inspection

export const Inspection_ViewData = async () => {
  let response = await axiosConfig
    .get(`${Inspection_XMLView}`)
    .then((res) => res.data);
  return response;
};

// Productwiki

export const Productwiki_ViewData = async () => {
  let response = await axiosConfig
    .get(`${productwiki_View}`)
    .then((res) => res.data);
  return response;
};

export const CreateProductWiki = async (data) => {
  let response = await axiosConfig
    .post(`${CRAETE_PRODUCT_WIKI}`, data)
    .then((res) => res.data);
  return response;
};
export const ViewProductWikiList = async () => {
  let response = await axiosConfig
    .get(`${VIEW_PRODUCT_WIKI}`)
    .then((res) => res.data);
  return response;
};
export const DeleteProductWiki = async (id) => {
  console.log(id);
  let response = await axiosConfig
    .get(`${DELETE_PRODUCT_WIKI}` + id)
    .then((res) => res.data);
  return response;
};
export const CommentProductWiki = async (id, data) => {
  let response = await axiosConfig
    .post(`${COMMENT_PRODUCT_WIKI}` + id, data)
    .then((res) => res.data);
  return response;
};

// TicketTool

export const TicketTool_ViewData = async () => {
  let response = await axiosConfig
    .get(`${ticketTool_View}`)
    .then((res) => res.data);
  return response;
};
export const ticketToolSave = async (data) => {
  let response = await axiosConfig
    .post(`${ticketTool_Save}`, data)
    .then((res) => res.data);
  return response;
};
export const ticketToolList = async () => {
  let response = await axiosConfig
    .get(`${ticketTool_List}`)
    .then((res) => res.data);
  return response;
};
export const ticketToolDeleteOne = async (id) => {
  let response = await axiosConfig
    .get(`${ticketTool_deleteList}` + id)
    .then((res) => res.data);
  return response;
};
// CreaterOrder

export const CreateOrder_ViewData = async () => {
  let response = await axiosConfig
    .get(`${CreaterOrder_View}`)
    .then((res) => res.data);
  return response;
};
export const OrderViewList = async () => {
  let response = await axiosConfig
    .get(`${Order_ViewList}`)
    .then((res) => res.data);
  return response;
};
export const PlaceOrderpost = async (payload) => {
  let response = await axiosConfig
    .post(`${PlaceOrder_post}`, payload)
    .then((res) => res.data);
  return response;
};

export const CommentOrder = async (id, data) => {
  let response = await axiosConfig
    .post(`${AddOrderComment}` + id, data)
    .then((res) => res.data);
  return response;
};
export const CreateOrder_ID = async () => {
  let response = await axiosConfig.get(`${orders_ID}`).then((res) => res.data);
  return response;
};
