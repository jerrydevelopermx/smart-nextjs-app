import { gql } from "@apollo/client";

const queries = {
  /**
   * GET_HOME_PAGE_INFO
   * Gets page configuration information and StoreGrid data (Main Page)
   * Used in: StorePage
   */
  GET_HOME_PAGE_INFO: gql`
    query GetPageInfo($storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        bloglink
        slides {
          img
        }
        categories {
          id
          name
          filters {
            id
            name
            values {
              id
              name
            }
          }
        }
        offers {
          img
        }
        video {
          src
        }
        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
            color
          }
          header {
            topbar {
              background
            }

            headermenu {
              color
            }
            styledmenu {
              paper {
                background
                color
              }
            }
            mobilenavbar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottombar {
              background
              color
            }
            footerlinks {
              color
            }
          }
          modalstyles {
            header {
              background
              color
            }
            body {
              background
              color
            }
            closebutton {
              root {
                color
                background
              }
            }
          }
        }
      }

      storeGrid(storeId: $storeId) {
        id
        name
        type
        categoryid
        name
        coverimage
        hoverimage
        description
      }
    }
  `,
  /**
   * GET_PAGE_INFO
   * Gets page configuration information
   * Used in: BlogPage, FullPage
   */
  GET_PAGE_INFO: gql`
    query GetFullPage($storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
            color
          }
          header {
            topbar {
              background
            }

            headermenu {
              color
            }
            styledmenu {
              paper {
                background
                color
              }
            }
            mobilenavbar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottombar {
              background
              color
            }
            footerlinks {
              color
            }
          }
          modalstyles {
            header {
              background
              color
            }
            body {
              background
              color
            }
            closebutton {
              root {
                color
                background
              }
            }
          }
        }
      }
    }
  `,
  /**
   * GET_PRODUCT_PAGE_BY_ID
   * Gets page configuration and product data by ProdID
   * Used in: ProductPage
   */
  GET_PRODUCT_PAGE_BY_ID: gql`
    query GetProduct($productId: ID!, $storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
            color
          }
          header {
            topbar {
              background
            }

            headermenu {
              color
            }
            styledmenu {
              paper {
                background
                color
              }
            }
            mobilenavbar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottombar {
              background
              color
            }
            footerlinks {
              color
            }
          }
          modalstyles {
            header {
              background
              color
            }
            body {
              background
              color
            }
            closebutton {
              root {
                color
                background
              }
            }
          }
        }
      }

      product(id: $productId) {
        storeId
        id
        name
        type
        categoryid
        color
        size
        style
        material
        name
        coverimage
        description
        price
        specifications
        warranties
        attributes {
          name
          values
        }
        gallery {
          img
          text
        }
      }
    }
  `,
  /**
   * GET_USERS_DATA
   * Gets users data list for datagrid
   * Used in: Users
   */
  GET_USERS_DATA: gql`
    query GetUsers {
      users {
        id
        username
        departmentid
        userfirstname
        userlastname
        usertype
        userstatus
        createddatime
        modifbyid
        modifdatime
      }
    }
  `,
  /**
   * GET_USER_DATA_BY_ID
   * Gets user data by ID
   * Used in: EditForms
   */
  GET_USER_DATA_BY_ID: gql`
    query GetUser($userId: ID!) {
      user(id: $userId) {
        id
        username
        password
        userfirstname
        userlastname
        usertype
        userstatus
        createddatime
        modifbyid
        modifdatime
        usertype
        islegalperson

        address1text
        address2text
        cityname
        statecode
        postalcode
        countrycode
        landlinenumber
        faxnumber
        cellphonenumber

        supplier
        shipper
        pymntchannel
        customer
        subscriber
        member
      }
    }
  `,
  /**
   * GET_USERS_DATA_QUERIES
   * Gets users data list for User Queries datagrid
   * Used in: UserQueries
   */
  GET_USERS_DATA_QUERIES: gql`
    query GetUsers {
      users {
        id
        username
        departmentid
        userfirstname
        userlastname
        usertype
        userstatus
        store
        storecontact
        supplier
        suppliercontact
        shipper
        shippercontact
        pymntchannel
        pymntchcontact
        member
        customer
        subscriber
        blogger
      }
    }
  `,
  /**
   * GET_EVENTS_DATA
   * Gets events data list for datagrid
   * Used in: UserEvents
   */
  GET_EVENTS_DATA: gql`
    query GetEvents {
      events {
        id
        username
        usertype
        departmentid
        fullname
        cellphonenumber
        userstatus
        eventdatime
        eventcategory
        eventtype
        activity
        originatorid
        eventstart
        eventend
        eventoutcome
        devicename
        deviceipaddress
        eventseverity
        eventstatus
        eventretention
      }
    }
  `,
  /**
   * GET_INCIDENTS_DATA
   * Gets incidents data list for datagrid
   * Used in: Incidentsmanager
   */
  GET_INCIDENTS_DATA: gql`
    query GetIncidents {
      cuMessages {
        id
        messagenumber
        emailaddress
        departmentid
        userid
        customerid
        subscriberid
        messageType
        lastandfirstname
        companyname
        messagesubject
        messagebody
        createddatime
        communicatedto
        communicateddatime
        level1escalatedto
        level1escalationdatime
        level2escalatedto
        level2escalationdatime
        modifiedbyid
        modifieddatime
        resolvedbyid
        resolveddatime
        approvedbyid
        approveddatime
        resolutiontext
        messagestatus
      }
    }
  `,
  /**
   * GET_DEPARTMENTS_DATA
   * Gets departments data list for datagrid
   * Used in: Departments
   */
  GET_DEPARTMENTS_DATA: gql`
    query GetDepartments {
      departments {
        id
        departmentid
        departmentnumber
        departmentname
        deptstatus
        createddatime
        modifieddatime
        createdbyid
      }
    }
  `,
  /**
   DELETE
   */
  GET_CAMPAIGNS_DATA: gql`
    query GetCampaigns {
      campaigns {
        id
        campaignnumber
        departmentid
        productid
        campaigntype
        campaignoccurrence
        gridpositionindex
        promotedfromdatime
        promotedtodatime
        campaignstatus
      }
    }
  `,
  /**
   * GET_CAMPAIGNS_DATA_BY_DEPT
   * Gets Campaigns data list for datagrid
   * Used in: Campaigns
   */
  GET_CAMPAIGNS_DATA_BY_DEPT: gql`
    query GetCampaigns($departmentID: ID!) {
      campaigns(departmentID: $departmentID) {
        id
        campaignnumber
        departmentid
        productid
        campaigntype
        campaignoccurrence
        gridpositionindex
        promotedfromdatime
        promotedtodatime
        campaignstatus
      }
    }
  `,
  /**
   * GET_INVENTORY_DATA_BY_DEPT
   * Gets Products and replenishments data list for datagrid
   * Used in: Inventory
   */
  GET_INVENTORY_DATA_BY_DEPT: gql`
    query GetInventory($departmentID: ID!) {
      productos(departmentID: $departmentID) {
        id
        productnumber
        productsku
        productshortname
        productdescription
        prodcategorycode
        prodsubcategorycode
        brandcode
        modelcode
        yearcode
        stylecode
        gendercode
        packagingcode
        materialcode
        colorcode
        sizecode
        flavorcode
      }

      replenishments(departmentID: $departmentID) {
        id
        replenishmentordernr
        departmentid
        supplierid
        repgendatime
        repplaceddatime
        reporderstatus
        replineitemnr
        productid
        supplierproductid
        quantityordered
        quantityreceived
        estimatedunitcost
        actualunitcost
        datefulfilled
        replistatus
      }
    }
  `,
  /**
   * GET_PRODUCT_DATA_BY_ID
   * Gets product data by ID
   * Used in: EditForms
   */
  GET_PRODUCT_DATA_BY_ID: gql`
    query GetProduct($id: ID!, $departmentID: ID!) {
      producto(id: $id) {
        id
        productnumber
        departmentid
        productsku
        productean
        productshortname
        productdescription
        prodcategorycode
        prodsubcategorycode
        brandcode
        modelcode
        yearcode
        stylecode
        gendercode
        packagingcode
        materialcode
        colorcode
        sizecode
        flavorcode
        attribmask
        attributemapcode
        produomcode
        produnitsinstocknumber
        inventorycostmethod
        produnitcostamount
        prodmsrpamount
        produnitpriceamount
        prodcurrencytype
        proddiscounttype
        proddiscountcondition
        proddiscountnumber
        prodpricecorrectionfactor
        produnitsonorder
        prodreplenishtype
        produisthresholdnumber
        pendreplenordernumber
        prodrankingtype
        prodstatus
        prodlocation1text
        prodlocation2text
        prodspecifications
        prodnotes
        proddefaultcontentlink
        proddefaulthoverlink
        supplier1id
        supplier1prodid
        supplier2id
        supplier2prodid
        campaigning
        campaignid
        gridpromotedpositionindex
        griddefaulpositiontindex
        prodprioritynumber
      }

      prodCategories {
        prodcategorycode
        prodcategoryname
        prodcategorytext
        prodcategorystatus
      }

      campaigns(departmentID: $departmentID) {
        id
        campaignnumber
      }
    }
  `,
  /**
   * GET_SUBCATEGORIES_BY_CATEGORY_ID
   * Gets Subcategories data by categoryID
   * Used in: ProductEditForm
   */
  GET_SUBCATEGORIES_BY_CATEGORY_ID: gql`
    query GetSubcategories($categoryCode: ID!) {
      prodSubcategories(categoryCode: $categoryCode) {
        prodsubcategorycode
        prodsubcategoryname
        prodsubcategorytext
        prodsubcategorystatus
      }
    }
  `,
  /**
   * GET_DEPARTMENT_DATA_BY_ID
   * Gets department data by ID
   * Used in: EditForms
   */
  GET_DEPARTMENT_DATA_BY_ID: gql`
    query GetDepartment($deptId: ID!) {
      department(id: $deptId) {
        id
        departmentid
        departmentnumber
        departmentname
        userid
        contactid
        deptcategorynumber
        deptstatus
        placeholdersincedate
        placeholderthrudate
        placeholdertype
        placeholdercode
        contractlink
        deptdefaultimagelink
        deptlogolink
        campaignid
        griddefaultpositionindex
        gridpromotedpositionindex
        deptprioritynumber
        modifieddatime
        createddatime
        createdbyid
        campaigning
        modifiedbyid
      }
    }
  `,
  /**
   * GET_CAMPAIGN_DATA_BY_ID
   * Gets campaign data by ID
   * Used in: EditForms
   */
  GET_CAMPAIGN_DATA_BY_ID: gql`
    query GetCampaign($campaignId: ID!) {
      campaign(id: $campaignId) {
        id
        campaignnumber
        departmentid
        productid
        campaigntype
        campaignoccurrence
        gridpositionindex
        promotedfromdatime
        promotedtodatime
        campaignstatus
      }
    }
  `,
  /**
   * GET_REPLENISHMENT_DATA_BY_ID
   * Gets replenishment data by ID
   * Used in: EditForms
   */
  GET_REPLENISHMENT_DATA_BY_ID: gql`
    query GetReplenishment($id: ID!) {
      replenishment(id: $id) {
        id
        replenishmentordernr
        departmentid
        supplierid
        repgendatime
        repplaceddatime
        reporderstatus
        replineitemnr
        productid
        supplierproductid
        quantityordered
        quantityreceived
        estimatedunitcost
        actualunitcost
        datefulfilled
        replistatus
      }
    }
  `,
  /**
   * GET_HTML_CONTENT_BY_ID_SECTION
   * Gets HTML Content data by section id
   * Used in: Header, Footer, JSONContent
   */
  GET_HTML_CONTENT_BY_ID_SECTION: gql`
    query GetSiteHTML($id: ID!, $sectionId: String) {
      siteHtmlContent(id: $id, sectionId: $sectionId) {
        content
      }
    }
  `,
  /**
   * GET_CMS_BY_ID
   * Gets CMS data by section id
   * Used in: ContentManager
   */
  GET_CMS_BY_ID: gql`
    query GetSiteCMS($siteId: ID!) {
      siteCMS(id: $siteId) {
        siteid
        sitetitletext
        sitemetadescriptiontext
        sitelogolink
        ourservmissionhtml
        ourservwhowerhtml
        ourservboardhtml
        ourservfeatureshtml
        ourservmmbshiphtml
        tourdefaultlink
        event1defaultlink
        event2defaultlink
        event3defaultlink
        contactushtml
        bloglink
        slide1defaultlink
        slide2defaultlink
        slide3defaultlink
        slide4defaultlink
        slide5defaultlink
        footerhistoryhtml
        sitepolicieshtml
        sitememberspolicyhtml
        sitecustomrspolicyhtml
        sitevisitorspolicyhtml
        sitemaincolorrgb
        sitebodycolorrgb
        sitefontnametext
        sitemainfontcolortext
        sitebodyfontcolortext
        sitefacebooklink
        sitetwitterlink
        siteinstagramlink
        sitepinterestlink
        sitecopyright
      }
    }
  `,
  /**
   * GET_CONTENT_BY_SECTION_AND_PAGE
   * Gets blog data information
   * Used in: BlogPage
   */
  GET_CONTENT_BY_SECTION_AND_PAGE: gql`
    query getContent($sectionId: String, $storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
            color
          }
          header {
            topbar {
              background
            }

            headermenu {
              color
            }
            styledmenu {
              paper {
                background
                color
              }
            }
            mobilenavbar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottombar {
              background
              color
            }
            footerlinks {
              color
            }
          }
          modalstyles {
            header {
              background
              color
            }
            body {
              background
              color
            }
            closebutton {
              root {
                color
                background
              }
            }
          }
        }
      }

      siteHtmlContent(id: $storeId, sectionId: $sectionId) {
        content
      }
    }
  `,

  //DELETE
  GET_PRODUCTS_DATA: gql`
    query GetProducts {
      productos {
        id
        productNumber
        productSKU
        productShortName
        productDescription
        prodCategoryCode
        prodSubcategoryCode
        brandCode
        modelCode
        yearCode
        styleCode
        genderCode
        packagingCode
        materialCode
        colorCode
        sizeCode
        flavorCode
      }
    }
  `,
  //DELETE
  GET_INVENTORY_DATA: gql`
    query GetInventory {
      productos {
        id
        productNumber
        productSKU
        productShortName
        productDescription
        prodCategoryCode
        prodSubcategoryCode
        brandCode
        modelCode
        yearCode
        styleCode
        genderCode
        packagingCode
        materialCode
        colorCode
        sizeCode
        flavorCode
      }

      replenishments {
        id
        replenishmentordernr
        departmentid
        supplierid
        repgendatime
        repplaceddatime
        reporderstatus
        replineitemnr
        productid
        supplierproductid
        quantityordered
        quantityreceived
        estimatedunitcost
        actualunitcost
        datefulfilled
        replistatus
      }
    }
  `,
  //DELETE
  GET_CONTENT_BY_ID: gql`
    query getContent($id: ID!, $storeId: ID!) {
      page(id: $storeId) {
        id
        name
        logo
        description
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
            color
          }
          header {
            topbar {
              background
            }

            headermenu {
              color
            }
            styledmenu {
              paper {
                background
                color
              }
            }
            mobilenavbar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottombar {
              background
              color
            }
            footerlinks {
              color
            }
          }
          modalstyles {
            header {
              background
              color
            }
            body {
              background
              color
            }
            closebutton {
              root {
                color
                background
              }
            }
          }
        }
      }
      newContent(id: $id) {
        id
        sectionId
        content
        title
      }
    }
  `,
  /** 
  DELETE 
  */
  GET_BLOG_PAGE_INFO: gql`
    query Blog($storeId: ID!, $sectionId: String) {
      page(id: $storeId) {
        id
        name
        logo
        description
        bloglink

        footer {
          copyright
          social {
            link
          }
        }
        styles {
          body {
            background
            fontfamily
            color
          }
          header {
            topbar {
              background
            }

            headermenu {
              color
            }
            styledmenu {
              paper {
                background
                color
              }
            }
            mobilenavbar {
              paper {
                background
                color
              }
            }
          } # end header styles
          footer {
            bottombar {
              background
              color
            }
            footerlinks {
              color
            }
          }
          modalstyles {
            header {
              background
              color
            }
            body {
              background
              color
            }
            closebutton {
              root {
                color
                background
              }
            }
          }
        }
      }
      content(storeId: $storeId, sectionId: $sectionId) {
        pageId
        sectionId
        title
        content {
          type
          text
        }
      }
    }
  `,

  /** 
DELETE 
*/
  GET_CONTENT_BY_SECTION: gql`
    query GetContent($storeId: ID!, $sectionId: String) {
      content(storeId: $storeId, sectionId: $sectionId) {
        pageId
        sectionId
        title
        content {
          type
          text
        }
      }
    }
  `,
};

export default queries;
