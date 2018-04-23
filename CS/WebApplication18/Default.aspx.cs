using DevExpress.DashboardWeb;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication18 {
    public partial class Default : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            DashboardFileStorage newDashboardStorage = new DashboardFileStorage(@"~/App_Data/Dashboards");
            ASPxDashboard1.SetDashboardStorage(newDashboardStorage);
        }
    }
}