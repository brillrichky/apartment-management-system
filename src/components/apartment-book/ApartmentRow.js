import React from "react";
import { Button } from "react-bootstrap";

export function ApartmentRow(props) { 
    return (
    <tbody>
      {props.units.map((unit) => { 
        
        return (
          <tr className="text-center" key={unit.id}>
            <td>{unit.unitCode}</td>
            <td>{unit.floor}</td>
            <td>{unit.rooms}</td>
            <td>{unit.direction}</td>
            <td>{unit.status}</td>
            <td>{unit.balcony}</td>
            <td>{unit.furnished}</td>
            <td>{unit.rentPrice}</td>
            <td>{unit.rentSchema}</td>
            <td>{unit.sellPrice}</td>
            <td>{unit.fullname}</td>
            <td>{unit.email}</td>
            <td>{unit.phone}</td>
            <td>{unit.martialStatus}</td>
            <td>{unit.dependents}</td>
            <td>{unit.birthDate}</td>
            <td>
              <Button
                onClick={(e) => props.sayHello(unit, e)}
                variant="dark">
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}