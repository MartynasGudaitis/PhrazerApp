# WEB system
- Phrazer

## Description
- Language learning B2B web application

## Entity definition

### Phrase
- ID(number[min 1, max 1 000 000])
- CreationDate(string[yyyy-mm-ddThh:mm:ss.ffffff])
- Phrase(string[min-2 max-100 string])
- Translation(string[min-2 max-100 string])
    - ModificationDate(string[yyyy-mm-ddThh:mm:ss.ffffff])
    - Image(url)
    - Recording(url)
    - Favorite(boolean)

### Category
- ID(number[min 1, max 1 000 000])
- CategoryName[min-2 max-100 string])
- CreationDate(string[yyyy-mm-ddThh:mm:ss.ffffff])
    - ModificationDate(string[yyyy-mm-ddThh:mm:ss.ffffff])
    - Image(url)

 ### Relation
 - Phrase and Category is n2n


- [ ] Define the entity ("object" that will be manipulated) of WEB system
- [ ] Entity should have 3 mandatory attributes:
- [ ] Entity should have at least 5 custom attributes
    Each attribute should have a type defined: number, string, ISO 8601 date string, boolean, object, array or other
    - [ ] Each attribute should have restrictions defined: list of constants, or number range, or string length, or string format, or object schema, or array schema or other. For example, you can use `joi` language to define restrictions: https://github.com/hapijs/joi/blob/v13.1.2/API.md

## API definition
- [ ] Define specific service API methods that WEB system is going to use
- [ ] Optionally define additional API methods that WEB system is going to expose
- [ ] API should have at least 4 methods
    - [ ] A method to return entity by ID. Should not have request body
    - [ ] A method to return multiple entities (Array) by ID. This method should support at least one header value to:
        - [ ] Return only entities that match pattern in one of its attributes
        - [ ] Return 10 entities starting provided index
        - [ ] Return sorted entities by one of its attributes (both ascending and descending)
        - [ ] Other (should be approved by Product Owner (PO))
    - [ ] A method to remove entity by ID. Returns removed entity. Should not have request body
    - [ ] A method to update entity by ID. Accepts entity to update and returns updated entity
- [ ] Each method should have HTTP method defined
- [ ] Each method should have URI defined (use {id} as entity ID placeholder)
- [ ] Should return all 4xx errors in unified format. Define format using `joi` language
- [ ] Should return all 5xx errors in unified format. Define format using `joi` language

#Phrase API

GET /api/category/:categoryId?size=:size&from=:from
404 category id not found
PUT  /api/phrase/:id
400 err message when validation fails
POST /phrase
400 err message when validation fails
Get /api/phrase/:id
404 phrase id not found
DELETE /phrase/id
404 phrase id not found
Post /category
400 err message when validation fails

* 500 in case server error

* for all



## UI definition
- [ ] Define the structure of how visually the WEB system is going to look like
- [ ] Should have at least one view defined with https://wireframe.cc (or other wireframe tool):
- [ ] The view should have a title
- [ ] The view should have a description of a service provided by web system
- [ ] The view should include at least 2 UI components:
    - [ ] A component to display multiple entities with all their attribute values visible. It should be posible to remove and edit selected entity.
        - [ ] Depending on chosen header of API method that returns multiple entities, it should be posible to select specific 10 entities starting index, sort entities by attribute, filter entities by attribute pattern, or other (should be approved by Product Owner (PO))
    - [ ] A component to create a new entity/edit existing entity. It should be posbile to create new entity and edit selected entity
        - [ ] Each attribute should have a dedicated editor field: text box for string or number, checkbox or radio buttons for boolean, date picker for date, etc.
