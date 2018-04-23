Imports DevExpress.DashboardWeb
Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace WebApplication18
    Partial Public Class [Default]
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim newDashboardStorage As New DashboardFileStorage("~/App_Data/Dashboards")
            ASPxDashboard1.SetDashboardStorage(newDashboardStorage)
        End Sub
    End Class
End Namespace