using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AspNetCore.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Users (Name, Email, LoginName, Phone) VALUES ('Carson, James', 'jcarson@jimmycarson.com', 'LAZYRIVER\\jcarson', '123-456-7899')");
            migrationBuilder.Sql("INSERT INTO Users (Name, Email, LoginName, Phone) VALUES ('Cowan, Donald', 'dcowan@jimmycarson.com', 'LAZYRIVER\\dcowan', '202-456-9876')");
            migrationBuilder.Sql("INSERT INTO Users (Name, Email, LoginName, Phone) VALUES ('King, Steve', 'sking@jimmycarson.com', 'LAZYRIVER\\sking', '202-456-5555')");

            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('Carson-ReferralA', (SELECT ID FROM Users WHERE Name = 'Carson, James'))");
            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('Carson-ReferralB', (SELECT ID FROM Users WHERE Name = 'Carson, James'))");
            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('Carson-ReferralC', (SELECT ID FROM Users WHERE Name = 'Carson, James'))");

            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('Cowan-ReferralA', (SELECT ID FROM Users WHERE Name = 'Cowan, Donald'))");
            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('Cowan-ReferralB', (SELECT ID FROM Users WHERE Name = 'Cowan, Donald'))");
            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('Cowan-ReferralC', (SELECT ID FROM Users WHERE Name = 'Cowan, Donald'))");

            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('King-ReferralA', (SELECT ID FROM Users WHERE Name = 'King, Steve'))");
            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('King-ReferralB', (SELECT ID FROM Users WHERE Name = 'King, Steve'))");
            migrationBuilder.Sql("INSERT INTO Referrals (Name, UserId) VALUES ('King-ReferralC', (SELECT ID FROM Users WHERE Name = 'King, Steve'))");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Users WHERE Name IN ('Carson, James', 'Cowan, Donald', 'King, Steve')");
        }
    }
}
