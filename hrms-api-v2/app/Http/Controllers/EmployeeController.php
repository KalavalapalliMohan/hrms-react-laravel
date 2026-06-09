<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeeResource;
use OpenApi\Attributes as OA;

class EmployeeController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | GET EMPLOYEES
    |--------------------------------------------------------------------------
    */

    #[OA\Get(
        path: "/api/employees",
        summary: "Get All Employees",
        tags: ["Employees"],
        security: [["bearerAuth" => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: "Employee List"
            ),
            new OA\Response(
                response: 401,
                description: "Unauthorized"
            )
        ]
    )]
    public function index(Request $request)
    {
        $query = Employee::query();

        if ($search = request()->query('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('department', 'like', "%{$search}%")
                  ->orWhere('designation', 'like', "%{$search}%");
            });
        }

        if ($request->department && $request->department !== 'All') {
            $query->where('department', $request->department);
        }

        if ($request->status && $request->status !== 'All') {
            $query->where('status', $request->status);
        }

        $query->latest();

        $employees = $query->paginate(5);

        return response()->json([
            'status' => true,
            'data' => EmployeeResource::collection($employees),
            'pagination' => [
                'current_page' => $employees->currentPage(),
                'last_page' => $employees->lastPage(),
                'per_page' => $employees->perPage(),
                'total' => $employees->total(),
            ]
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | CREATE EMPLOYEE
    |--------------------------------------------------------------------------
    */

    #[OA\Post(
        path: "/api/employees",
        summary: "Create Employee",
        operationId: "createEmployee",
        tags: ["Employees"],
        security: [["bearerAuth" => []]]
    )]
    #[OA\RequestBody(
        required: true,
        content: new OA\JsonContent(
            required: ["name","email","phone","department","designation","status"],
            properties: [
                new OA\Property(property: "name", type: "string", example: "John"),
                new OA\Property(property: "email", type: "string", example: "john@gmail.com"),
                new OA\Property(property: "phone", type: "string", example: "9876543210"),
                new OA\Property(property: "department", type: "string", example: "IT"),
                new OA\Property(property: "designation", type: "string", example: "Developer"),
                new OA\Property(property: "status", type: "string", example: "active")
            ]
        )
    )]
    #[OA\Response(
        response: 201,
        description: "Employee Created"
    )]
    public function store(Request $request)
    {
        $employee = Employee::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Employee created successfully',
            'data' => new EmployeeResource($employee)
        ], 201);
    }

    /*
    |--------------------------------------------------------------------------
    | SHOW EMPLOYEE
    |--------------------------------------------------------------------------
    */

    #[OA\Get(
        path: "/api/employees/{employee}",
        summary: "Get Single Employee",
        operationId: "getEmployeeById",
        tags: ["Employees"],
        security: [["bearerAuth" => []]]
    )]
    #[OA\Parameter(
        name: "employee",
        in: "path",
        required: true,
        description: "Employee ID"
    )]
    #[OA\Response(
        response: 200,
        description: "Employee Details"
    )]
    public function show(Employee $employee)
    {
        return response()->json([
            'status' => true,
            'data' => new EmployeeResource($employee)
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE EMPLOYEE
    |--------------------------------------------------------------------------
    */

    #[OA\Put(
        path: "/api/employees/{employee}",
        summary: "Update Employee",
        operationId: "updateEmployee",
        tags: ["Employees"],
        security: [["bearerAuth" => []]],
        parameters: [
            new OA\Parameter(
                name: "employee",
                in: "path",
                required: true,
                description: "Employee ID",
                schema: new OA\Schema(type: "integer")
            )
        ],
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "name", type: "string"),
                    new OA\Property(property: "email", type: "string"),
                    new OA\Property(property: "phone", type: "string"),
                    new OA\Property(property: "department", type: "string"),
                    new OA\Property(property: "designation", type: "string"),
                    new OA\Property(property: "status", type: "string")
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: "Employee Updated Successfully"
            ),
            new OA\Response(
                response: 404,
                description: "Employee Not Found"
            )
        ]
    )]
    // update function
    public function update(Request $request, Employee $employee)
    {
        $employee->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Employee updated successfully',
            'data' => new EmployeeResource($employee)
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | DELETE EMPLOYEE
    |--------------------------------------------------------------------------
    */

    #[OA\Delete(
        path: "/api/employees/{employee}",
        summary: "Delete Employee",
        operationId: "deleteEmployee",
        tags: ["Employees"],
        security: [["bearerAuth" => []]],
        parameters: [
            new OA\Parameter(
                name: "employee",
                in: "path",
                required: true,
                description: "Employee ID",
                schema: new OA\Schema(type: "integer")
            )
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: "Employee Deleted Successfully"
            ),
            new OA\Response(
                response: 404,
                description: "Employee Not Found"
            )
        ]
    )]
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->json([
            'status' => true,
            'message' => 'Employee deleted successfully'
        ]);
    }
}