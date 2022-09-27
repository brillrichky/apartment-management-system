import { Row, Col, Button } from "react-bootstrap";

export function ApartmentRow(props) {
  return (
    <tbody>
        {/* ? */}
      {props.units.map((unit) => { //1.1
        return (
          <tr key={unit.id}>
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
                variant="success"
              >
                Submit
              </Button>
            </td>
          </tr>
        );
      })
      }
      {/* :
      ( <tr>
        <td colSpan={colspan} className="text-center text-danger fw-bold fst-italic">
            No Guest
        </td>
        </tr>) */}
    </tbody>
  );
}