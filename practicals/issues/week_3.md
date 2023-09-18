# Issues - week 3

### Please copy and paste the details below to add them as new issues to your GitHub repository.

You can either decide which issue each person will in advance, and then each person creates their
own issue, or have one person create the issues for the whole team.

Please make sure that anyone on the team who needs support has someone they can call on.


<details><summary>As a system administrator, I want to maintain reference values for continents</summary>

**End user goal:**
To be able to list, create, update and delete reference values for continents

**End business goal:**
To have appropriate continent records available to annotate countries (e.g. 'Asia', 'South America', 'Oceania', etc.)

**Acceptance criteria:**

* A continent item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `continent`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for rota types</summary>

**End user goal:**
To be able to list, create, update and delete reference values for rota types

**End business goal:**
To have appropriate types available to classify rotas (e.g. 'OSOCC security', 'accommodation cleaning', 'kitchen duty', etc.)

**Acceptance criteria:**

* A rota type item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `rota_type`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for equipment types</summary>

**End user goal:**
To be able to list, create, update and delete reference values for equipment types

**End business goal:**
To have appropriate types available to describe items of equipment (e.g. 'vehicle', 'stretcher', 'mobile la
e', etc.)

**Acceptance criteria:**

* An equipment type item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `equipment_type`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for organisation types</summary>

**End user goal:**
To be able to list, create, update and delete reference values for organisation types

**End business goal:**
To have appropriate type available to add to describe organisations (e.g. 'un', 'national government', 'media agency', etc.)

**Acceptance criteria:**

* n organisation type item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `organisation_type`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for order statuses</summary>

**End user goal:**
To be able to list, create, update and delete reference values for order statuses

**End business goal:**
To have appropriate statuses available to describe orders for more resources (e.g. 'provisional', 'sent', 'fulfilled', etc.)

**Acceptance criteria:**

* n order status item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `order_status`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for resource types</summary>

**End user goal:**
To be able to list, create, update and delete reference values for resource types

**End business goal:**
To have appropriate types available to describe resources (e.g. 'food', 'fuel', 'clothing', 'medical', etc.)

**Acceptance criteria:**

* A resource type item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `resource_types`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for room type</summary>

**End user goal:**
To be able to list, create, update and delete reference values for room types

**End business goal:**
To have appropriate types available to describe diff
t rooms in the OSOCC (e.g. 'office', 'accommodation', 'storage', etc.)

**Acceptance criteria:**

* A room type item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `room_type`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for room use types</summary>

**End user goal:**
To be able to list, create, update and delete reference values for room use types

**End business goal:**
To have appropriate types available to describe a room use (e.g. 'accommodation', 'storage', 'kitchen', etc.)

**Acceptance criteria:**

* A room use type item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `room_use_type`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for building types</summary>

**End user goal:**
To be able to list, create, update and delete reference values for room use statuses

**End business goal:**
To have appropriate statuses available to describe a building (e.g. 'house', 'portakabin', 'tent', 'garage', etc.)

**Acceptance criteria:**

* A building type status item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `building_type`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for system types</summary>

**End user goal:**
To be able to list, create, update and delete reference values for system types

**End business goal:**
To have appropriate types available to describe systems (e.g. 'administrative', 'infrastructure', 'intelligence', 'communications', etc.)

**Acceptance criteria:**

* A system type item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `system_type`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for system privilege levels</summary>

**End user goal:**
To be able to list, create, update and delete reference values for system privilege levels

**End business goal:**
To have appropriate levels available to describe a system privilege (e.g. 'public', 'user', 'admin', etc.)

**Acceptance criteria:**

* A system privilege level item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `system_privilege_level`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for operational authorisation status</summary>

**End user goal:**
To be able to list, create, update and delete reference values for operational authorisation statuses

**End business goal:**
To have appropriate statuses available to describe operational authorisations (e.g. 'submitted', 'approved', 'rejected', etc.)

**Acceptance criteria:**

* n operational authorisation status item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `operational_authorisation_status`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for alert types</summary>

**End user goal:**
To be able to list, create, update and delete reference values for alert types

**End business goal:**
To have appropriate types available to categorise alerts (e.g. 'security', 'team', 'resource', etc.)

**Acceptance criteria:**

* n alter type item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `alert_type`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for operational team statuses</summary>

**End user goal:**
To be able to list, create, update and delete reference values for operational team statuses

**End business goal:**
To have appropriate statuses available to describe an operational team (e.g. 'requested', 'confirmed', 'active', etc.)

**Acceptance criteria:**

* An operational team status item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `operational_team_status`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for assignment statuses</summary>

**End user goal:**
To be able to list, create, update and delete reference values for assignment statuses

**End business goal:**
To have appropriate assignment statuses available to add to describe a person's assignment to an operational team (e.g. 'requested', 'authorised', 'rejected', etc.)

**Acceptance criteria:**

* n assignment status item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `assignment_status`
* The table will have a single column, `name`
</details>

<details><summary>As a system administrator, I want to maintain reference values for position statuses</summary>

**End user goal:**
To be able to list, create, update and delete reference values for position statuses

**End business goal:**
To have appropriate position statuses available to describe a person's position in an organisation (e.g. 'active', 'retired', 'seconded out')

**Acceptance criteria:**

* A position status item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `position_status`
* The table will have a single column, `name`</details>

<details><summary>As a system administrator, I want to maintain reference values for roles</summary>

**End user goal:**
To be able to list, create, update and delete reference values for roles

**End business goal:**
To have appropriate roles available to describe a person's position in a team (e.g. 'leader', 'driver', 'medic', etc.)

**Acceptance criteria:**

* A role item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `role`
* The table will have a single column, `name`</details>

<details><summary>As a system administrator, I want to maintain reference values for skills</summary>

**End user goal:**
To be able to list, create, update and delete reference values for skills

**End business goal:**
To have appropriate skills available to add to a user's profile and to use in search operations

**Acceptance criteria:**

* A skill item can be created, viewed, updated and deleted (CRUD functionality)

**Measurement of success:**

* Unit tests pass for all CRUD operations

**Notes:**

* The database table will be called `skill`
* The table will have a single column, `name`</details>
