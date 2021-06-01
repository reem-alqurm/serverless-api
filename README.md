## Lab 18: AWS API, Dynamo and Lambda
* Create a serverless REST API.

## Author: Reem Alqurm

## Link to GitHub repo
* [LINK](https://github.com/reem-alqurm/serverless-api)
## Link to PR 
* [PR](https://github.com/reem-alqurm/serverless-api/pulls)

## Feature Tasks
* Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

## Routes: API Gateway
 * POST: /people
 * GET: /people and /people/{id}
 * PUT: /people/{id}
 * DELETE: /people/{id}

### Root URL: https://siqm8cpce7.execute-api.us-east-1.amazonaws.com/ 

### Routes: GET/POST to /people, GET/PUT/DELETE to /people/{id}
### Inputs:
 * POST: input JSON body
 * PUT: input JSON body
 * DELETE: input ID
### Outputs:
 * GET: returns objects from database (all or specific id)
 * POST: returns object just added
 * PUT: returns updated object
 * DELETE: returns empty object

## UML

<img src = "./UntitledWorkspace(11).png">