import {Component} from '@angular/core';

@Component({
    template: `
        <h2>Add news</h2><br/>
        <table border="0">

            <div style="padding:1px">

                <tr>
                    <td>
                        <div style="float:left;padding-right:8px;">
                            Title
                        </div>
                    </td>
                    <td>
                        <input/>
                    </td>
                </tr>
            </div>

            <div style="padding:1px">
                <tr>
                    <td>
                        <div style="float:left;padding-right:8px;">
                            Date
                        </div>
                    </td>
                    <td>
                        <input/>
                    </td>
                </tr>
            </div>

            <div style="padding:1px">
                <tr>
                    <td>
                        <div style="float:left;padding-right:8px;">
                            Brief
                        </div>
                    </td>
                    <td>
                        <input/>
                    </td>
                </tr>
            </div>

            <div style="padding:1px">
                <tr>
                    <td>
                        <div style="float:left;padding-right:8px;">
                            Content
                        </div>
                    </td>
                    <td>
                        <input/>
                    </td>
                </tr>
            </div>

        </table>
    `
})
export class AddNewsFormComponent {
}
