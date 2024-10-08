﻿using System.ComponentModel.DataAnnotations;

namespace Domain.DomainModel.Base
{
    public class LookupBaseModel : BaseModel
    {
        #region Properties
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;
        
        [MaxLength(20)]
        public string Code { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? Description { get; set; }
        
        public int SortOrder { get; set; }
        #endregion
    }
}
