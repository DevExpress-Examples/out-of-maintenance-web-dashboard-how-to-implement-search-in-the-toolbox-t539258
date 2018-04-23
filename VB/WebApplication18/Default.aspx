<%@ Page Language="vb" AutoEventWireup="true" CodeBehind="Default.aspx.vb" Inherits="WebApplication18.Default" %>

<%@ Register Assembly="DevExpress.Dashboard.v17.1.Web, Version=17.1.4.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.DashboardWeb" TagPrefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <link href="ToolboxSearchExtension/ToolboxSearchExtension.css" rel="stylesheet" />
    <script src="ToolboxSearchExtension/ToolboxSearchExtension.js"></script>

    <script type="text/javascript">
        function onBeforeRender(s, e) {
            var dashboardControl = s.GetDashboardControl();
            dashboardControl.registerExtension(new ToolboxSearchExtension(dashboardControl));
        }
    </script>

</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div id="popup"></div>
            <dx:ASPxDashboard ID="ASPxDashboard1" runat="server">
                <ClientSideEvents BeforeRender="onBeforeRender" />
            </dx:ASPxDashboard>
        </div>
    </form>
</body>
</html>