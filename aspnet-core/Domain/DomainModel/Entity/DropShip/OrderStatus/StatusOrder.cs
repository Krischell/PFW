﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.DomainModel.Entity.DropShip
{
    public class StatusOrder
    {
        public string PONumber { get; set; } = string.Empty;
        public int SupplierId { get; set; }
        //public string Status { get; set; } = string.Empty;
    }
}
