<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Resources\EmployeeResource;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::paginate(5);
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $employee = Employee::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'department' => $request->department,
            'designation' => $request->designation,
            'status' => $request->status,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Employee created successfully',
            'data' => new EmployeeResource($employee)
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return response()->json([
            'status' => true,
            'data' => new EmployeeResource($employee)
        ]);
    }

    /**
     * Update the specified employee.
     */
    public function update(Request $request, Employee $employee)
    {
        $employee->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'department' => $request->department,
            'designation' => $request->designation,
            'status' => $request->status,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Employee updated successfully',
            'data' => new EmployeeResource($employee)
        ]);
    }

    /**
     * Remove the specified employee.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->json([
            'status' => true,
            'message' => 'Employee deleted successfully'
        ]);
    }
}
