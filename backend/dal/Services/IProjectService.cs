using Pims.Dal.Entities;
using Pims.Dal.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Pims.Dal.Services
{
    /// <summary>
    /// IProjectService interface, provides functions to interact with projects within the datasource.
    /// </summary>
    public interface IProjectService : IService
    {
        int Count();
        Paged<Project> GetPage(ProjectFilter filter);
        Paged<Project> GetExcelPage(ProjectFilter filter);
        Project Get(int id);
        Project Get(string projectNumber);
        Paged<NotificationQueue> GetNotificationsInQueue(ProjectNotificationFilter filter);
        System.Threading.Tasks.Task<Project> AddAsync(Project project);
        System.Threading.Tasks.Task<Project> UpdateAsync(Project project);
        System.Threading.Tasks.Task<Project> RemoveAsync(Project project);
        System.Threading.Tasks.Task<Project> SetStatusAsync(Project project, Workflow workflow, bool sendNotifications = true);
        System.Threading.Tasks.Task<Project> SetStatusAsync(Project project, string workflowCode);
        System.Threading.Tasks.Task<IEnumerable<NotificationQueue>> CancelNotificationsAsync(int projectId, int? agencyId = null);
    }
}
